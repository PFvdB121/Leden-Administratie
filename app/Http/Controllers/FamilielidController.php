<?php

namespace App\Http\Controllers;

use App\Models\Familielid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\FamilielidResource;

class FamilielidController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "page" => "nullable|numeric",
            "naam" => "nullable|string",
            "email" => "nullable|string",
            "familie" => "nullable|string",
            "adres" => "nullable|string",
            "straat" => "nullable|string",
            "stad" => "nullable|string",
            "land" => "nullable|string",
        ]);
        $familieLeden = Familielid::where("naam", "like", "%" . $request["naam"] . "%")
        ->where("email", "like", "%" . $request["email"] . "%")->whereHas("familie", function($query) use($request){
            return $query->where("naam", "like", "%" . $request["familie"] . "%")
            ->whereHas("adres", function(Builder $query) use($request){
                return $query->where(function(Builder $query) use($request){
                    $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", "%" . $request["adres"] . "%")
                    ->orWhere("huisnummer", "like", "%" . $request["adres"] . "%");
                })
                ->whereHas("straat", function(Builder $query) use($request){
                    return $query->where("naam", "like", "%" . $request["straat"] . "%")
                    ->whereHas("stad", function(Builder $query) use($request){
                        return $query->where("naam", "like", "%" . $request["stad"] . "%")
                        ->whereHas("land", function(Builder $query) use($request){
                            return $query->where("naam", "like", "%" . $request["land"] . "%");
                        });
                    });
                });
            });
        })
        ->paginate(20);

        return FamilielidResource::collection($familieLeden);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Familielid $familielid)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Familielid $familielid)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Familielid $familielid)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        $validated = $request->validate([
            "email" => "required|email",
        ]);
        
        Familielid::where("email", $request["email"])->delete();
    }
}

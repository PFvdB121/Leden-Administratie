<?php

namespace App\Http\Controllers;

use App\Models\Adres;
use App\Models\Straat;
use App\Models\Stad;
use App\Models\Land;
use App\Models\Familie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\FamilieResource;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\FamilieFrontResource;

class FamilieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "page" => "nullable|numeric",
            "naam" => "nullable|string",
            "huisnummer" => "nullable|string",
            "straat" => "nullable|string",
            "stad" => "nullable|string",
            "land" => "nullable|string"
        ]);

        $families = Familie::where("naam", "like", "%" . $request["naam"] . "%")
        ->whereHas("adres", function(Builder $query) use($request){
            return $query->where(function(Builder $query) use($request){
                $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", "%" . $request["huisnummer"] . "%")
                ->orWhere("huisnummer", "like", "%" . $request["huisnummer"] . "%");
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
        })->paginate(20);

        return FamilieFrontResource::collection($families);
    }

    /**
     * Display a listing of the resource.
     */
    public function search(Request $request)
    {
        $validate = $request->validate([
            "naam" => "nullable|string",
            "huisnummer" => "required|integer",
            "bijvoeging" => "nullable|string",
            "straat" => "required|string",
            "stad" => "required|string",
            "land" => "required|string"
        ]);

        $families = Familie::select("naam")
        ->where("naam", "like", $request["naam"] . "%")
        ->whereHas("adres", function($query) use($request){
            return $query->where(function($query) use ($request){
                return $query->where(function($query) use($request){
                    $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), $request["huisnummer"] . $request["bijvoeging"])
                    ->orWhere("huisnummer", $request["huisnummer"] . $request["bijvoeging"]);
                });
            })->whereHas("straat", function($query) use($request){
                return $query->where("naam", $request["straat"])
                ->whereHas("stad", function($query) use($request){
                    return $query->where("naam", $request["stad"])
                    ->whereHas("land", function($query) use($request){
                        return $query->where("naam", $request["land"]);
                    });
                });
            });
        })->offset(0)->limit(10)->get();

        return $families;
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
    public function show(Request $request)
    {
        $validate = $request->validate([
            "id" => "required|numeric",
        ]);

        $familie = Familie::where("id", $request["id"])->first();

        return new FamilieResource($familie);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Familie $familie)
    {
        //
    }

    protected function searchAdres(Request $request){
        $validate = $request->validate([
            "huisnummer" => "required|integer", 
            "bijvoeging" => "nullable|string|max:3", 
            "straat" => "required|string", 
            "stad" => "required|string", 
            "land" => "required|string",
        ]);

        if (Land::where("naam", "=", $request["land"])->count() === 0) {
            Land::create([
                "naam" => $request["land"],
            ]);
        }

        $land = Land::where("naam", "=", $request["land"])->first();

        if (Stad::where("naam", "=", $request["stad"])->where("land_id", "=", $land->id)->count() === 0) {
            Stad::create([
                "naam" => $request["stad"],
                "land_id" => $land->id,
            ]);
        }

        $stad = Stad::where("naam", "=", $request["stad"])->where("land_id", "=", $land->id)->first();

        if (Straat::where("naam", "=", $request["straat"])->where("stad_id", "=", $stad->id)->count() === 0) {
            Straat::create([
                "naam" => $request["straat"],
                "stad_id" => $stad->id,
            ]);
        }

        $straat = Straat::where("naam", "=", $request["straat"])->where("stad_id", "=", $stad->id)->first();

        if (Adres::where(function($query) use ($request){
            return $query->where(function($query) use($request){
                return $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", $request["huisnummer"] . $request["bijvoeging"])
                ->orWhere("huisnummer", "like", $request["huisnummer"] . $request["bijvoeging"]);
            });
        })->where("straat_id", "=", $straat->id)->count() === 0) {
            Adres::create([
                "huisnummer" => $request["huisnummer"],
                "bijvoeging" => $request["bijvoeging"],
                "straat_id" => $straat->id,
            ]);
        }

        $adres = Adres::where(function(Builder $query) use($request){
            return $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", $request["huisnummer"] . $request["bijvoeging"])
            ->orWhere("huisnummer", "like", $request["huisnummer"] . $request["bijvoeging"]);
        })->where("straat_id", "=", $straat->id)->first();

        return $adres;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $validate = $request->validate([
            "id" => "required|integer",
            "naam" => "required|string", 
            "huisnummer" => "required|integer", 
            "bijvoeging" => "nullable|string|max:3", 
            "straat" => "required|string", 
            "stad" => "required|string", 
            "land" => "required|string",
        ]);
        
        $adres = $this->searchAdres($request);

        $familie = Familie::where("id", $request["id"])->update([
            "naam" => $request["naam"],
            "adres_id" => $adres->id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        $validated = $request->validate([
            "id" => "required|numeric",
        ]);
        
        Familie::where("id", $request["id"])->delete();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Adres;
use Illuminate\Http\Request;

class AdresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "huisnummer" => "number",
            "bijvoeging" => "string",
            "straat" => "required|string",
            "stad" => "required|string",
            "land" => "required|string"
        ]);

        $adressen = Adres::select("huisnummer", "bijvoeging")
        ->where("huisnummer", "like", $request["huisnummer"] . "%")
        ->where(function($query) use ($request){
            $query = $query->where("bijvoeging", "like", $request["bijvoeging"] . "%");
            if (is_null($request["bijvoeging"]) || empty($request["bijvoeging"])) {
                $query = $query->orWhereNull("bijvoeging");
            }
            return $query;
        })
        ->whereHas("straat", function($query) use($request){
            return $query->where("naam", $request["straat"])
            ->whereHas("steden", function($query) use($request){
                return $query->where("naam", $request["stad"])
                ->whereHas("landen", function($query) use($request){
                    return $query->where("naam", $request["land"]);
                });
            });
        })->offset(0)->limit(10)->get();

        return $adressen;
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
    public function show(Adres $adres)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Adres $adres)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Adres $adres)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Adres $adres)
    {
        //
    }
}

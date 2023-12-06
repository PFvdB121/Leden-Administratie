<?php

namespace App\Http\Controllers;

use App\Models\Adres;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "huisnummer" => "nullable|integer",
            "bijvoeging" => "nullable|string",
            "straat" => "required|string",
            "stad" => "required|string",
            "land" => "required|string"
        ]);

        $adressen = Adres::select("huisnummer", "bijvoeging")
        ->where(function($query) use ($request){
            return $query->where(function($query) use($request){
                $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", $request["huisnummer"] . $request["bijvoeging"] . "%")
                ->orWhere("huisnummer", "like", $request["huisnummer"] . $request["bijvoeging"] . "%");
            });
        })
        ->whereHas("straat", function($query) use($request){
            return $query->where("naam", $request["straat"])
            ->whereHas("stad", function($query) use($request){
                return $query->where("naam", $request["stad"])
                ->whereHas("land", function($query) use($request){
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

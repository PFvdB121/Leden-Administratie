<?php

namespace App\Http\Controllers;

use App\Models\Familie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FamilieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
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
    public function show(Familie $familie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Familie $familie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        //
    }
}

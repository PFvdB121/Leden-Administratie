<?php

namespace App\Http\Controllers;

use App\Models\Familie;
use Illuminate\Http\Request;

class FamilieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "naam" => "nullable|string",
            "huisnummer" => "required|number",
            "bijvoeging" => "nullable|string",
            "straat" => "required|string",
            "stad" => "required|string",
            "land" => "required|string"
        ]);

        $families = Familie::select("naam")
        ->where("naam", "like", $request["naam"], "%")
        ->whereHas("straat", function($query) use($request){
            return $query->where("huisnummer", $request["huisnummer"])
            ->where(function($query) use ($request){
                $query = $query->where("bijvoeging", $request["bijvoeging"]);
                if (is_null($request["bijvoeging"]) || empty($request["bijvoeging"])) {
                    $query = $query->orWhereNull("bijvoeging");
                }
                return $query;
            })->whereHas("straat", function($query) use($request){
                return $query->where("naam", $request["straat"])
                ->whereHas("steden", function($query) use($request){
                    return $query->where("naam", $request["stad"])
                    ->whereHas("landen", function($query) use($request){
                        return $query->where("naam", $request["land"]);
                    });
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
    public function update(Request $request, Familie $familie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Familie $familie)
    {
        //
    }
}

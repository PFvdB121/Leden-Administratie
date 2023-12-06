<?php

namespace App\Http\Controllers;

use App\Models\Straat;
use Illuminate\Http\Request;

class StraatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "naam" => "nullable|string",
            "stad" => "required|string",
            "land" => "required|string",
        ]);

        $straten = Straat::select("naam")
        ->where("naam", "like", $request["naam"] . "%")
        ->whereHas("stad", function($query) use ($request){
            return $query->where("naam", $request["stad"])
            ->whereHas("land", function($query) use ($request){
                return $query->where("naam", $request["land"]);
            });
        })->offset(0)->limit(10)->get();

        return $straten;
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
    public function show(Straat $straat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Straat $straat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Straat $straat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Straat $straat)
    {
        //
    }
}

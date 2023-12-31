<?php

namespace App\Http\Controllers;

use App\Models\SoortLid;
use App\Models\Contributie;
use App\Models\Familielid;
use Illuminate\Http\Request;
use App\Http\Resources\SoortLidResource;

class SoortLidController extends Controller
{
    /**
     * Display a listing of the resource in a custom made collection of objects.
     */
    public function index()
    {
        $soortenLeden = SoortLidResource::collection(SoortLid::get());

        return $soortenLeden;
    }

    /**
     * Display a listing of the resource.
     */
    public function get()
    {
        $soortenLeden = SoortLid::get();

        return $soortenLeden;
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
        // Validates user input
        $validate = $request->validate([
            "omschrijving" => "required|string",
            "korting" => "required|numeric",
            "minLeeftijd" => "nullable|integer",
            "maxLeeftijd" => "nullable|integer",
        ]);

        SoortLid::create([
            "omschrijving" => $request["omschrijving"],
            "korting" => $request["korting"],
            "min_leeftijd" => $request["minLeeftijd"],
            "max_leeftijd" => $request["maxLeeftijd"],
        ]);
    }

    // Checks if omschrijving is already used for other soort lid
    public function check(Request $request){
        // Validates user input
        $validate = $request->validate([
            "omschrijving" => "required|string",
            "id" => "nullable|integer",
        ]);

        $check = SoortLid::where("omschrijving", "like", $request["omschrijving"]);
        
        return (!!$check->count() == 0 || $check->first()->id == $request["id"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        // Validates user input
        $validate = $request->validate([
            "id" => "required|integer",
        ]);

        $soortLid = SoortLid::where("id", $request["id"])->first();

        return $soortLid;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SoortLid $soortLid)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SoortLid $soortLid)
    {
        // Validates user input
        $validate = $request->validate([
            "id" => "required|integer",
            "omschrijving" => "required|string",
            "korting" => "required|numeric",
            "minLeeftijd" => "nullable|integer",
            "maxLeeftijd" => "nullable|integer",
        ]);

        SoortLid::where("id", $request["id"])->update([
            "omschrijving" => $request["omschrijving"],
            "korting" => $request["korting"],
            "min_leeftijd" => $request["minLeeftijd"],
            "max_leeftijd" => $request["maxLeeftijd"],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        // Validates user input
        $validate = $request->validate([
            "id" => "required|integer",
        ]);

        // Removes soort lid from contributies
        Contributie::where("soort_lid_id", $request["id"])->update(["soort_lid_id" => null]);

        SoortLid::where("id", $request["id"])->delete();
    }
}

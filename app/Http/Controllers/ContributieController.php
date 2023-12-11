<?php

namespace App\Http\Controllers;

use App\Models\Contributie;
use Illuminate\Http\Request;

class ContributieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "page" => "nullable|numeric",
            "boekjaar" => "nullable|numeric",
            "email" => "nullable|string",
            "soortLid" => "nullable|string",
            "minLeeftijd" => "nullable|numeric",
            "maxLeeftijd" => "nullable|numeric",
        ]);

        $contributies = Contributie::where("leeftijd", ">=", $request["minLeeftijd"])
        ->where("leeftijd", "<=", $request["maxLeeftijd"]);
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
    public function show(Contributie $contributie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contributie $contributie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contributie $contributie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contributie $contributie)
    {
        //
    }
}

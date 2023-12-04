<?php

namespace App\Http\Controllers;

use App\Models\Land;
use Illuminate\Http\Request;

class LandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "naam" => "string",
        ]);

        $landen = Land::select("naam")->where("naam", "like", $request["naam"] . "%")->offset(0)->limit(10)->get();

        return $landen;
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
    public function show(Land $land)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Land $land)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Land $land)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Land $land)
    {
        //
    }
}

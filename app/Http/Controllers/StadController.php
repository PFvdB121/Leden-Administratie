<?php

namespace App\Http\Controllers;

use App\Models\Stad;
use Illuminate\Http\Request;

class StadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "naam" => "nullable|string",
            "land" => "required|string",
        ]);

        $steden = Stad::select("naam")
        ->where("naam", "like", $request["naam"] . "%")
        ->whereHas("land", function($query) use($request){
            return $request->where("naam", $request["land"]);
        })->offset(0)->limit(10)->get();

        return $steden;
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
    public function show(Stad $stad)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stad $stad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stad $stad)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stad $stad)
    {
        //
    }
}

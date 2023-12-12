<?php

namespace App\Http\Controllers;

use App\Models\Boekjaar;
use Illuminate\Http\Request;

class BoekjaarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function searchYears(Request $request)
    {
        $validate = $request->validate([
            "jaar" => "nullable|numeric",
        ]);

        $boekenjaren = Boekjaar::select("jaar")->where("jaar", "like", $request . "%");

        return $boekenjaren;
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
    public function show(Boekjaar $boekjaar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Boekjaar $boekjaar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Boekjaar $boekjaar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Boekjaar $boekjaar)
    {
        //
    }
}

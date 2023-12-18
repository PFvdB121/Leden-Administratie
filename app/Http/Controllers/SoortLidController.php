<?php

namespace App\Http\Controllers;

use App\Models\SoortLid;
use Illuminate\Http\Request;

class SoortLidController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soortenLeden = SoortLid::get();

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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
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

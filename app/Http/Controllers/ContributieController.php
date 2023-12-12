<?php

namespace App\Http\Controllers;

use App\Models\Contributie;
use App\Models\Boekjaar;
use App\Models\Familielid;
use Illuminate\Http\Request;
use App\Http\Resources\ContributieResource;

class ContributieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $validate = $request->validate([
            "page" => "nullable|numeric",
            "minLeeftijd" => "nullable|numeric",
            "maxLeeftijd" => "nullable|numeric",
            "boekjaar" => "nullable|numeric",
            "naam" => "nullable|string",
            "email" => "nullable|string",
            "soortLid" => "nullable|string",
        ]);

        $contributies = Contributie::where("leeftijd", ">=", $request["minLeeftijd"])
        ->where("leeftijd", "<=", $request["maxLeeftijd"])
        ->whereHas("boekjaar", function($query) use ($request){
            return $query->where("jaar", "like", "%" . $request['boekjaar'] . "%");
        })
        ->whereHas("familieLid", function($query) use ($request){
            return $query->where("naam", "like", "%" . $request['naam'] . "%")
            ->where("email", "like", "%" . $request['email'] . "%");
        })
        ->whereHas("soortLid", function($query) use ($request){
            return $query->where("omschrijving", "like", "%" . $request['soortLid'] . "%");
        })->paginate(20);

        return $contributies;
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
        $validate = $request->validate([
            "bedrag" => "required|decimal:0,2",
            "boekjaar" => "required|numeric",
            "email" => "required|string",
        ]);

        $lid = Familielid::where("email", $request["email"])->first();
        $soortLid = SoortLid::where("omschrijving", $lid->soortLid->omschrijving)->first();

        $boekjaar = Boekjaar::where("jaar", $request["boekjaar"])->first();

        $datum = new DateTime($request["boekjaar"] . "-01-01");
        $birth = new DateTime($lid->geboortedatum);

        $verschil = $birth->diff($datum);
        $jaar = $verschil->y;

        Contributie::create([
            "bedrag" => $request["bedrag"],
            "familie_lid_id" => $lid->id,
            "soort_lid_id" => $lid->soortLid->id,
            "boekjaar_id" => $boekjaar->id,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $validate = $request->validate([
            "id" => "required|numeric",
        ]);

        $contributie = Contributie::where("id", $request["id"])->first();

        return new ContributieResource($contributie);
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
    public function update(Request $request)
    {
        $validate = $request->validate([
            "id" => "required|numeric",
            "bedrag" => "required|decimal:0,2",
            "boekjaar" => "required|numeric",
            "soortLid" => "required|string",
            "email" => "required|string",
        ]);

        $lid = Familielid::where("email", $request["email"])->first();
        $soortLid = SoortLid::where("omschrijving", $request["soortLid"])->first();
        $boekjaar = Boekjaar::where("jaar", $request["boekjaar"])->first();

        $datum = new DateTime($request["boekjaar"] . "-01-01");
        $birth = new DateTime($lid->geboortedatum);

        $verschil = $birth->diff($datum);
        $jaar = $verschil->y;

        Contributie::where("id", $request["id"])->update([
            "bedrag" => $request["bedrag"],
            "familie_lid_id" => $lid->id,
            "soort_lid_id" => $soortLid->id,
            "boekjaar_id" => $boekjaar->id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        $validate = $request->validate([
            "id" => "required|numeric",
        ]);

        $contributie = Contributie::where("id", $request["id"])->destroy();
    }
}

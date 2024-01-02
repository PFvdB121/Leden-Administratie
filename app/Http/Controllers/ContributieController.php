<?php

namespace App\Http\Controllers;

use DateTime;
use App\Models\Contributie;
use App\Models\SoortLid;
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
        // Put in here because get records it as string
        if (!is_null($request["checkEmailNot"])) {
            if ($request["checkEmailNot"] === "true") {
                $request["checkEmailNot"] = true;
            }
            elseif ($request["checkEmailNot"] === "false") {
                $request["checkEmailNot"] = false;
            }
        }

        // Validates user input, which is used to search for rows
        $validate = $request->validate([
            "page" => "nullable|integer",
            "checkEmailNot" => "nullable|boolean",
            "minLeeftijd" => "nullable|integer",
            "maxLeeftijd" => "nullable|integer",
            "boekjaar" => "nullable|integer",
            "email" => "nullable|string",
            "soortLid" => "nullable|string",
            "minBedrag" => "nullable|decimal:0,2",
            "maxBedrag" => "nullable|decimal:0,2",
        ]);

        // uses array so I don't have to write if statement over and over again
        $check = array(
            array(
                "col" => "leeftijd",
                "key" => "minLeeftijd",
                "operator" => ">=",
            ),
            array(
                "col" => "leeftijd",
                "key" => "maxLeeftijd",
                "operator" => "<=",
            ),
            array(
                "col" => "bedrag",
                "key" => "minBedrag",
                "operator" => ">=",
            ),
            array(
                "col" => "bedrag",
                "key" => "maxBedrag",
                "operator" => "<=",
            ),
        );

        // whereHas accesses foreign table through method of class
        $contributies = Contributie::whereHas("boekjaar", function($query) use ($request){
            return $query->where("jaar", "like", "%" . $request['boekjaar'] . "%");
        });
        
        // Checks if contributie is added by deleted familielid
        if ($request["checkEmailNot"]) {
            $contributies = $contributies->whereNull("familie_lid_id");
        }
        // Checks by email of familielid. Checks if email request is filled so it would also search for contributies where familielid was deleted
        elseif ($request['email']){
            $contributies = $contributies->whereHas("familieLid", function($query) use ($request){
                return $query->where("email", "like", "%" . $request['email'] . "%");
            });
        }

        // Checks if contributie is added by deleted soort lid
        if ($request['soortLid'] == "geen") {
            $contributies = $contributies->whereNull("soort_lid_id");
        }
        // Checks by soort lid. Checks if soortLid request is filled so it would also search for contributies where soort lid was deleted 
        elseif (SoortLid::where("omschrijving", $request['soortLid'])->count() > 0) {
            $contributies = $contributies->whereHas("soortLid", function($query) use ($request){
                return $query->where("omschrijving", $request['soortLid']);
            });
        }

        foreach ($check as $value) {
            if (!is_null($request[$value["key"]])) {
                $contributies = $contributies->where($value["col"], $value["operator"], $request[$value["key"]]);
            }
        }

        // paginate returns rows based on page request and on how many I requested, in this case 20
        $contributies = $contributies->paginate(20);

        // Returns contributies in collection of custom objects
        return ContributieResource::collection($contributies);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    // Checks if boekjaar exists. If not, creates a new one
    protected function boekjaar(Request $request){
        $validate = $request->validate([
            "boekjaar" => "required|numeric",
        ]);

        if (Boekjaar::where("jaar", $request["boekjaar"])->count() == 0) {
            Boekjaar::create([
                "jaar" => $request["boekjaar"],
            ]);
        }

        $boekjaar = Boekjaar::where("jaar", $request["boekjaar"])->first();

        return $boekjaar;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validates user input
        $validate = $request->validate([
            "bedrag" => "required|decimal:0,2",
            "boekjaar" => "required|numeric",
            "email" => "nullable|string",
            "soortLid" => "nullable|string",
        ]);

        $lid = Familielid::where("email", $request["email"])->first();
        $soortLid = SoortLid::where("omschrijving", $request["soortLid"])->first();

        $boekjaar = $this->boekjaar($request);

        if ($lid) {
            $datum = new DateTime($request["boekjaar"] . "-01-01");
            $birth = new DateTime($lid->geboortedatum);
    
            $verschil = $birth->diff($datum);
            $jaar = $verschil->y;
        }
        else{
            $jaar = null;
        }

        Contributie::create([
            "leeftijd" => $jaar,
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
        // Validates user input
        $validate = $request->validate([
            "id" => "required|integer",
        ]);

        $contributie = Contributie::where("id", $request["id"])->first();

        // Returns contributie in custom row
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
        // Validates user input
        $validate = $request->validate([
            "id" => "required|numeric",
            "bedrag" => "required|decimal:0,2",
            "boekjaar" => "required|numeric",
            "soortLid" => "nullable|string",
            "email" => "nullable|string",
        ]);

        $lid = Familielid::where("email", $request["email"])->first();
        $soortLid = SoortLid::where("omschrijving", $request["soortLid"])->first();
        $boekjaar = $this->boekjaar($request);

        if ($lid) {
            $datum = new DateTime($request["boekjaar"] . "-01-01");
            $birth = new DateTime($lid->geboortedatum);
    
            $verschil = $birth->diff($datum);
            $jaar = $verschil->y;
        }
        else{
            $jaar = null;
        }

        Contributie::where("id", $request["id"])->update([
            "leeftijd" => $jaar,
            "bedrag" => $request["bedrag"],
            "familie_lid_id" => ($lid ? $lid->id : null),
            "soort_lid_id" => ($soortLid ? $soortLid->id : null),
            "boekjaar_id" => $boekjaar->id,
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

        $contributie = Contributie::where("id", $request["id"])->delete();
    }
}

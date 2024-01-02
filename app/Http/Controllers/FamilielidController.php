<?php

namespace App\Http\Controllers;

use App\Models\Familielid;
use App\Models\Familie;
use App\Models\Adres;
use App\Models\Straat;
use App\Models\Stad;
use App\Models\Land;
use App\Models\SoortLid;
use App\Models\Contributie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Resources\FamilielidResource;
use App\Http\Resources\FamilielidFrontResource;

class FamilielidController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Validates user input
        $validate = $request->validate([
            "page" => "nullable|numeric",
            "naam" => "nullable|string",
            "email" => "nullable|string",
            "soortLid" => "nullable|string",
            "familie" => "nullable|string",
            "adres" => "nullable|string",
            "straat" => "nullable|string",
            "stad" => "nullable|string",
            "land" => "nullable|string",
            "minGeboortedatum" => "nullable|date",
            "maxGeboortedatum" => "nullable|date",
        ]);
        // whereHas accesses foreign table through method of class
        $familieLeden = Familielid::where("naam", "like", "%" . $request["naam"] . "%")
        ->where("email", "like", "%" . $request["email"] . "%")->whereHas("familie", function($query) use($request){
            return $query->where("naam", "like", "%" . $request["familie"] . "%")
            ->whereHas("adres", function(Builder $query) use($request){
                return $query->where(function(Builder $query) use($request){
                    $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", "%" . $request["adres"] . "%")
                    ->orWhere("huisnummer", "like", "%" . $request["adres"] . "%");
                })
                ->whereHas("straat", function(Builder $query) use($request){
                    return $query->where("naam", "like", "%" . $request["straat"] . "%")
                    ->whereHas("stad", function(Builder $query) use($request){
                        return $query->where("naam", "like", "%" . $request["stad"] . "%")
                        ->whereHas("land", function(Builder $query) use($request){
                            return $query->where("naam", "like", "%" . $request["land"] . "%");
                        });
                    });
                });
            });
        });
        
        if (SoortLid::where("omschrijving", $request['soortLid'])->count() > 0) {
            $familieLeden = $familieLeden->whereHas("soortLid", function($query) use ($request){
                return $query->where("omschrijving", $request['soortLid']);
            });
        }

        if ($request["minGeboortedatum"]) {
            $familieLeden = $familieLeden->where("geboortedatum", ">=", $request["minGeboortedatum"]);
        }

        if ($request["maxGeboortedatum"]) {
            $familieLeden = $familieLeden->where("geboortedatum", "<=", $request["maxGeboortedatum"]);
        }

        // paginate returns rows based on page request and on how many I requested, in this case 20
        $familieLeden = $familieLeden->paginate(20);

        // Returns Families in collection of custom objects
        return FamilielidFrontResource::collection($familieLeden);
    }

    // Checks if email already exists, and if it belongs to the familielid
    public function check(Request $request){
        $validate = $request->validate([
            "email" => "required|email",
            "id" => "nullable|integer",
        ]);

        $check = Familielid::where("email", "like", $request["email"]);
        
        return (!!$check->count() == 0 || $check->first()->id == $request["id"]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    // Searches user emails
    public function searchEmail(Request $request)
    {
        // Validates user input
        $validate = $request->validate([
            "email" => "nullable|string",
        ]);

        // Returns first 10 familieleden based on email
        $emails = Familielid::where("email", "like", $request["email"] . "%")->offset(0)->limit(10)->get();

        // Returns Families in collection of custom objects
        return FamilielidFrontResource::collection($emails);
    }

    // Checks if familie already exists and returns them, and if not, creates them first
    protected function checkFamily(Request $request)
    {
        // Validates user input
        $validate = $request->validate([
            "familie" => "required|string", 
            "huisnummer" => "required|integer", 
            "bijvoeging" => "nullable|string|max:3", 
            "straat" => "required|string", 
            "stad" => "required|string", 
            "land" => "required|string",
        ]);

        if (Land::where("naam", "=", $request["land"])->count() === 0) {
            Land::create([
                "naam" => $request["land"],
            ]);
        }

        $land = Land::where("naam", "=", $request["land"])->first();

        if (Stad::where("naam", "=", $request["stad"])->where("land_id", "=", $land->id)->count() === 0) {
            Stad::create([
                "naam" => $request["stad"],
                "land_id" => $land->id,
            ]);
        }

        $stad = Stad::where("naam", "=", $request["stad"])->where("land_id", "=", $land->id)->first();

        if (Straat::where("naam", "=", $request["straat"])->where("stad_id", "=", $stad->id)->count() === 0) {
            Straat::create([
                "naam" => $request["straat"],
                "stad_id" => $stad->id,
            ]);
        }

        $straat = Straat::where("naam", "=", $request["straat"])->where("stad_id", "=", $stad->id)->first();

        // whereHas accesses foreign table through method of class
        if (Adres::where(function($query) use ($request){
            return $query->where(function($query) use($request){
                return $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", $request["huisnummer"] . $request["bijvoeging"])
                ->orWhere("huisnummer", "like", $request["huisnummer"] . $request["bijvoeging"]);
            });
        })->where("straat_id", "=", $straat->id)->count() === 0) {
            Adres::create([
                "huisnummer" => $request["huisnummer"],
                "bijvoeging" => $request["bijvoeging"],
                "straat_id" => $straat->id,
            ]);
        }

        $adres = Adres::where(function(Builder $query) use($request){
            return $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), "like", $request["huisnummer"] . $request["bijvoeging"])
            ->orWhere("huisnummer", "like", $request["huisnummer"] . $request["bijvoeging"]);
        })->where("straat_id", "=", $straat->id)->first();

        if (Familie::where("naam", "=", $request["familie"])->where("adres_id", "=", $adres->id)->count() === 0) {
            Familie::create([
                "naam" => $request["familie"],
                "adres_id" => $adres->id,
            ]);
        }

        $familie = Familie::where("naam", "=", $request["familie"])->where("adres_id", "=", $adres->id)->first();

        return $familie;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validates user input
        $validate = $request->validate([
            "naam" => "required|string", 
            "email" => "required|email", 
            "geboortedatum" => "required|date", 
            "soortLid" => "required|string", 
            "familie" => "required|string", 
            "huisnummer" => "required|integer", 
            "bijvoeging" => "nullable|string|max:3", 
            "straat" => "required|string", 
            "stad" => "required|string", 
            "land" => "required|string",
        ]);

        $familie = $this->checkFamily($request);
        $soortLid = SoortLid::where("omschrijving", $request["soortLid"])->first();

        Familielid::create([
            "naam" => $request["naam"],
            "email" => $request["email"],
            "geboortedatum" => $request["geboortedatum"],
            "soort_lid_id" => $soortLid->id,
            "familie_id" => $familie->id,
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

        $lid = Familielid::where("id", $request["id"])->first();

        // Returns Families in custom object
        return new FamilielidResource($lid);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Familielid $familielid)
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
            "id" => "required|integer",
            "naam" => "required|string", 
            "email" => "required|email", 
            "geboortedatum" => "required|date", 
            "soortLid" => "required|string", 
            "familie" => "required|string", 
            "huisnummer" => "required|integer", 
            "bijvoeging" => "nullable|string|max:3", 
            "straat" => "required|string", 
            "stad" => "required|string", 
            "land" => "required|string",
        ]);

        $familie = $this->checkFamily($request);
        $soortLid = SoortLid::where("omschrijving", $request["soortLid"])->first();

        Familielid::where("id", $request["id"])->update([
            "naam" => $request["naam"],
            "email" => $request["email"],
            "geboortedatum" => $request["geboortedatum"],
            "soort_lid_id" => $soortLid->id,
            "familie_id" => $familie->id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request)
    {
        // Validates user input
        $validated = $request->validate([
            "id" => "required|numeric",
        ]);

        // Removes familielid from contributies
        Contributie::where("familie_lid_id", $request["id"])->update(["familie_lid_id" => null]);

        $familielid = Familielid::where("id", $request["id"]);

        $familieID = $familielid->first()->familie_id;
        
        $familielid->delete();

        $familie = Familie::where("id", $familieID);

        // Deletes familie if it has no members
        if ($familie->first()->familieleden->count() == 0) {
            $familie->delete();
        }
    }
}

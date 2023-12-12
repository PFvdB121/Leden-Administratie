<?php

namespace App\Http\Controllers;

use App\Models\Familielid;
use App\Models\Familie;
use App\Models\Adres;
use App\Models\Straat;
use App\Models\Stad;
use App\Models\Land;
use App\Models\SoortLid;
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
        
        if ($request["soortLid"]) {
            $familieLeden = $familieLeden->whereHas("soortLid", function($query) use($request){
                return $query->where("omschrijving", $request["soortLid"]);
            });
        }

        if ($request["minGeboortedatum"]) {
            $familieLeden = $familieLeden->where("geboortedatum", ">=", $request["minGeboortedatum"]);
        }

        if ($request["maxGeboortedatum"]) {
            $familieLeden = $familieLeden->where("geboortedatum", "<=", $request["maxGeboortedatum"]);
        }

        $familieLeden = $familieLeden->paginate(20);

        return FamilielidFrontResource::collection($familieLeden);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function searchEmail(Request $request)
    {
        $validate = $request->validate([
            "email" => "nullable|string",
        ]);

        $emails = Familielid::select("email")->where("email", "like", $request["email"] . "%")->offset(0)->limit(10)->get();

        return $emails;
    }

    protected function checkFamily(Request $request)
    {
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

        if (Adres::where(function($query) use ($request){
            return $query->where(function($query) use($request){
                return $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), $request["huisnummer"] . $request["bijvoeging"])
                ->orWhere("huisnummer", $request["huisnummer"] . $request["bijvoeging"]);
            });
        })->where("straat_id", "=", $straat->id)->count() === 0) {
            Adres::create([
                "huisnummer" => $request["huisnummer"],
                "bijvoeging" => $request["bijvoeging"],
                "straat_id" => $straat->id,
            ]);
        }

        $adres = Adres::where(function(Builder $query) use($request){
            return $query->where(DB::raw("CONCAT(huisnummer, bijvoeging)"), $request["huisnummer"] . $request["bijvoeging"])
            ->orWhere("huisnummer", $request["huisnummer"] . $request["bijvoeging"]);
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

        $family = $this->checkFamily($request);
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
        $validate = $request->validate([
            "id" => "required|integer",
        ]);

        $lid = Familielid::where("id", $request["id"])->first();

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
        $validated = $request->validate([
            "id" => "required|numeric",
        ]);
        
        Familielid::where("id", $request["id"])->delete();
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Boekjaar;
use App\Models\Familielid;
use App\Models\SoortLid;
use App\Models\Contributie;
use DateTime;

class ContributieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $leden = Familielid::get();
        $boekenjaren = Boekjaar::get();

        foreach ($leden as $lid) {
            $birth = new DateTime($lid->geboortedatum);
    
            foreach ($boekenjaren as $boekjaar) {
                $datum = new DateTime($boekjaar->jaar . "-01-01");
                $verschil = $birth->diff($datum);
                $jaar = $verschil->y;
                $soortLid = SoortLid::where("min_leeftijd", "<=", $jaar)
                ->where(function(Builder $query) use ($jaar){
                    return $query->where("max_leeftijd", ">=", $jaar)
                    ->orWhereNull("max_leeftijd");
                })->first();
                $bedrag = floatval(number_format(100 * (1 - $soortLid->korting / 100), 2, '.', ''));
                
                Contributie::create([
                    "leeftijd" => $jaar,
                    "bedrag" => $bedrag,
                    "familie_lid_id" => $lid->id,
                    "soort_lid_id" => $soortLid->id,
                    "boekjaar_id" => $boekjaar->id,
                ]);
            }
        }
    }
}

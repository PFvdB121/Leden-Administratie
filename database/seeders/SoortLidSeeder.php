<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SoortLid;

class SoortLidSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $soortenLeden = [
            [
                "omschrijving" => "Jeugd",
                "min_leeftijd" => 0,
                "max_leeftijd" => 7,
                "korting" => 50,
            ],
            [
                "omschrijving" => "Aspirant",
                "min_leeftijd" => 8,
                "max_leeftijd" => 12,
                "korting" => 40,
            ],
            [
                "omschrijving" => "Junior",
                "min_leeftijd" => 13,
                "max_leeftijd" => 17,
                "korting" => 25,
            ],
            [
                "omschrijving" => "Senior",
                "min_leeftijd" => 18,
                "max_leeftijd" => 50,
                "korting" => 0,
            ],
            [
                "omschrijving" => "Oudere",
                "min_leeftijd" => 51,
                "korting" => 45,
            ],
        ];

        foreach ($soortenLeden as $soortlid) {
            SoortLid::insert($soortlid);
        }
    }
}

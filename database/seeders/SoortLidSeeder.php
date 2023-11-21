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
            ],
            [
                "omschrijving" => "Aspirant",
            ],
            [
                "omschrijving" => "Junior",
            ],
            [
                "omschrijving" => "Senior",
            ],
            [
                "omschrijving" => "Oudere",
            ],
        ];

        foreach ($soortenLeden as $soortlid) {
            SoortLid::insert($soortlid);
        }
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Stad;
use App\Models\Straat;

class StraatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $Dordrecht = Stad::where("naam", "=", "Dordrecht")->first();
        $Marrakesh = Stad::where("naam", "=", "Marrakesh")->first();
        $Amsterdam = Stad::where("naam", "=", "Amsterdam")->first();
        $straten = [
            [
                "naam" => "Reeweg Oost",
                "stad_id" => $Dordrecht->id,
            ],
            [
                "naam" => "Komatistraat",
                "stad_id" => $Dordrecht->id,
            ],
            [
                "naam" => "Immeuble",
                "stad_id" => $Marrakesh->id,
            ],
            [
                "naam" => "Vijzelstraat",
                "stad_id" => $Amsterdam->id,
            ],
        ];

        Straat::insert($straten);
        // foreach ($straten as $straat) {
        //     Straat::insert($straat);
        // }
    }
}

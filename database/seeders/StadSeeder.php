<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Land;
use App\Models\Stad;

class StadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $Marokko = Land::where("naam", "=", "Marokko")->first();
        $Nederland = Land::where("naam", "=", "Nederland")->first();
        $steden = [
            [
                "naam" => "Dordrecht",
                "land_id" => $Nederland->id,
            ],
            [
                "naam" => "Amsterdam",
                "land_id" => $Nederland->id,
            ],
            [
                "naam" => "Marrakesh",
                "land_id" => $Marokko->id,
            ],
        ];

        // Stad::insert($steden);
        foreach($steden as $stad){
            Stad::insert($stad);
        }
    }
}

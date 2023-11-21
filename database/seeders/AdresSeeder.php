<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Straat;
use App\Models\Adres;

class AdresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $ReewegOost = Straat::where("naam", "=", "Reeweg Oost")->first()->id;
        $Immeuble = Straat::where("naam", "=", "Immeuble")->first()->id;
        $Vijzelstraat = Straat::where("naam", "=", "Vijzelstraat")->first()->id;
        $Komatistraat = Straat::where("naam", "=", "Komatistraat")->first()->id;

        $adressen = [
            [
                "huisnummer" => 121,
                "bijvoeging" => null,
                "straat_id" => $ReewegOost,
            ],
            [
                "huisnummer" => 11,
                "bijvoeging" => null,
                "straat_id" => $ReewegOost,
            ],
            [
                "huisnummer" => 19,
                "bijvoeging" => null,
                "straat_id" => $ReewegOost,
            ],
            [
                "huisnummer" => 11,
                "bijvoeging" => null,
                "straat_id" => $Komatistraat,
            ],
            [
                "huisnummer" => 14,
                "bijvoeging" => null,
                "straat_id" => $Komatistraat,
            ],
            [
                "huisnummer" => 25,
                "bijvoeging" => null,
                "straat_id" => $Komatistraat,
            ],
            [
                "huisnummer" => 89,
                "bijvoeging" => null,
                "straat_id" => $Vijzelstraat,
            ],
            [
                "huisnummer" => 89,
                "bijvoeging" => "a",
                "straat_id" => $Vijzelstraat,
            ],
            [
                "huisnummer" => 89,
                "bijvoeging" => "b",
                "straat_id" => $Vijzelstraat,
            ],
            [
                "huisnummer" => 253,
                "bijvoeging" => null,
                "straat_id" => $Vijzelstraat,
            ],
            [
                "huisnummer" => 253,
                "bijvoeging" => "a",
                "straat_id" => $Vijzelstraat,
            ],
            [
                "huisnummer" => 253,
                "bijvoeging" => "b",
                "straat_id" => $Vijzelstraat,
            ],
            [
                "huisnummer" => 253,
                "bijvoeging" => "c",
                "straat_id" => $Vijzelstraat,
            ],
            [
                "huisnummer" => 59,
                "bijvoeging" => null,
                "straat_id" => $Immeuble,
            ],
            [
                "huisnummer" => 59,
                "bijvoeging" => "a",
                "straat_id" => $Immeuble,
            ],
            [
                "huisnummer" => 59,
                "bijvoeging" => "b",
                "straat_id" => $Immeuble,
            ],
            [
                "huisnummer" => 59,
                "bijvoeging" => "c",
                "straat_id" => $Immeuble,
            ],
            [
                "huisnummer" => 59,
                "bijvoeging" => "d",
                "straat_id" => $Immeuble,
            ],
        ];

        Adres::insert($adressen);
    }
}

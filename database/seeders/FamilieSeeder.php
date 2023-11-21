<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Adres;
use App\Models\Familie;

class FamilieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $adressen = Adres::get();

        foreach ($adressen as $adres) {
            Familie::factory()->count(3)->create(["adres_id" => $adres->id]);
        }
    }
}

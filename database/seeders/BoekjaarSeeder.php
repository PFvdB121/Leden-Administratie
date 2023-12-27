<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Boekjaar;

class BoekjaarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        for ($i=(date("Y") - 3); $i < date("Y"); $i++) { 
            Boekjaar::insert([
                "jaar" => $i,
            ]);
        }
    }
}

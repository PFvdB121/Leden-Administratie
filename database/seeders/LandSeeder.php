<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Land;

class LandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $landen = [
            [
                "naam" => "Nederland",
            ],
            [
                "naam" => "Marokko",
            ]
        ];

        // Land::create($landen);
        foreach ($landen as $land) {
            Land::insert($land);
        }
    }
}

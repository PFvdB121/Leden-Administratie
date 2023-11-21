<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Familie;
use App\Models\Familielid;

class FamilielidSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $families = Familie::get();

        foreach ($families as $familie) {
            Familielid::factory()->count(3)->create([
                "familie_id" => $familie->id,
            ]);
        }
    }
}

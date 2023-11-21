<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Familielid>
 */
class FamilielidFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $birth = date("Y-m-d", rand(strtotime("-5 year"), strtotime("-70 year")));
        $age = date_diff(date_create($birth), date_create("today"))->y;
        $soortenLeden = [
            [
                "id" => 1,
                "min_age" => 0,
                "max_age" => 7
            ],
            [
                "id" => 2,
                "min_age" => 8,
                "max_age" => 12
            ],
            [
                "id" => 3,
                "min_age" => 13,
                "max_age" => 17
            ],
            [
                "id" => 4,
                "min_age" => 18,
                "max_age" => 50
            ],
            [
                "id" => 5,
                "min_age" => 51,
                "max_age" => 999
            ],
        ];

        $soortLidFilter = array_filter($soortenLeden, function ($var) use($age) {
            return ($var["min_age"] <= $age && $var["max_age"] >= $age);
        });

        $soortLid = reset($soortLidFilter);
        
        return [
            "naam" => fake()->name(),
            "email" => fake()->email(),
            "geboortedatum" => $birth,
            "soort_lid_id" => $soortLid["id"],
        ];
    }
}

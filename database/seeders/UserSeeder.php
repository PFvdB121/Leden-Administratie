<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $password = bcrypt("test1234");
        $username = "testUser";
        $email = "testUser@email.com";

        User::create([
            "name" => $username,
            "email" => $email,
            "password" => $password,
        ]);
    }
}

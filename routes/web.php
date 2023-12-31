<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::group(["middleware" => "guest:web"], function(){
    Route::get('/', ["as" => "login", "uses" => function () {
        return view('login');
    }]);

    Route::post("/", "App\Http\Controllers\LoginController@login");
});

// With auth:web, only users who have logged in can access these apis
Route::group(["middleware" => "auth:web"], function(){
    Route::prefix("app")->group(function(){
        Route::get("{app?}", function() {
            return view("app");
        });

        Route::post("logout", "App\Http\Controllers\LoginController@logout");

        Route::prefix("leden")->group(function(){
            Route::post("/", "App\Http\Controllers\FamilielidController@index");
            Route::post("/show", "App\Http\Controllers\FamilielidController@show");
            Route::post("/delete", "App\Http\Controllers\FamilielidController@delete");
            Route::post("/update", "App\Http\Controllers\FamilielidController@update");
            Route::post("/create", "App\Http\Controllers\FamilielidController@store");
            Route::post("/zoek_mails", "App\Http\Controllers\FamilielidController@searchEmail");
            Route::post("/check", "App\Http\Controllers\FamilielidController@check");
        });

        Route::prefix("soorten_leden")->group(function(){
            Route::post("/", "App\Http\Controllers\SoortLidController@index");
            Route::post("/get", "App\Http\Controllers\SoortLidController@get");
            Route::post("/show", "App\Http\Controllers\SoortLidController@show");
            Route::post("/delete", "App\Http\Controllers\SoortLidController@delete");
            Route::post("/update", "App\Http\Controllers\SoortLidController@update");
            Route::post("/store", "App\Http\Controllers\SoortLidController@store");
            Route::post("/check", "App\Http\Controllers\SoortLidController@check");
        });

        Route::prefix("contributies")->group(function(){
            Route::post("/", "App\Http\Controllers\ContributieController@index");
            Route::post("/show", "App\Http\Controllers\ContributieController@show");
            Route::post("/delete", "App\Http\Controllers\ContributieController@delete");
            Route::post("/update", "App\Http\Controllers\ContributieController@update");
            Route::post("/store", "App\Http\Controllers\ContributieController@store");
        });

        Route::prefix("families")->group(function(){
            Route::post("/", "App\Http\Controllers\FamilieController@index");
            Route::post("/update", "App\Http\Controllers\FamilieController@update");
            Route::post("/show", "App\Http\Controllers\FamilieController@show");
            Route::post("/search", "App\Http\Controllers\FamilieController@search");
        });

        Route::prefix("boekenjaren")->group(function(){
            Route::post("zoek_jaar", "App\Http\Controllers\BoekjaarController@searchYears");
        });

        Route::prefix("adressen")->group(function(){
            Route::post("/", "App\Http\Controllers\AdresController@index");
        });

        Route::prefix("straten")->group(function(){
            Route::post("/", "App\Http\Controllers\StraatController@index");
        });

        Route::prefix("steden")->group(function(){
            Route::post("/", "App\Http\Controllers\StadController@index");
        });

        Route::prefix("landen")->group(function(){
            Route::post("/", "App\Http\Controllers\LandController@index");
        });
    });
});

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
            Route::post("/zoek_mail", "App\Http\Controllers\FamilielidController@searchEmail");
        });

        Route::prefix("soorten_leden")->group(function(){
            Route::post("/", "App\Http\Controllers\SoortLidController@index");
            Route::post("/get", "App\Http\Controllers\SoortLidController@gets");
            Route::post("/show", "App\Http\Controllers\SoortLidController@show");
            Route::post("/delete", "App\Http\Controllers\SoortLidController@delete");
            Route::post("/update", "App\Http\Controllers\SoortLidController@update");
            Route::post("/store", "App\Http\Controllers\SoortLidController@store");
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
            Route::post("/delete", "App\Http\Controllers\FamilieController@delete");
            Route::post("/update", "App\Http\Controllers\FamilieController@update");
            Route::post("/show", "App\Http\Controllers\FamilieController@show");
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

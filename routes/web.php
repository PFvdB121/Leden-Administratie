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
            Route::post("/delete", "App\Http\Controllers\FamilielidController@delete");
            Route::post("/create", "App\Http\Controllers\FamilielidController@create");
        });

        Route::post("families", "App\Http\Controllers\FamilieController@index");

        Route::post("adressen", "App\Http\Controllers\AdresController@index");

        Route::post("straten", "App\Http\Controllers\StraatController@index");

        Route::post("steden", "App\Http\Controllers\StadController@index");

        Route::post("landen", "App\Http\Controllers\LandController@index");

        Route::post("soorten_leden", "App\Http\Controllers\SoortLidController@index");
    });
});

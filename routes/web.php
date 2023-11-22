<?php

use Illuminate\Support\Facades\Route;

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
    Route::get('/', function () {
        return view('login');
    });

    Route::post("/", "App\Http\Controllers\LoginController@login");
});



Route::group(["middleware" => "auth:web"], function(){
    Route::prefix("app")->group(function(){
        Route::get("/{app?}", function() {
            return view("app");
        });
    });
});

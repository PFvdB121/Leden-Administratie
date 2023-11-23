<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request){
        $validate = $request->validate([
            "name" => "required|string",
            "password" => "required|string",
        ]);

        $creds = $request->only("name", "password");

        // redirect("/");

        if (Auth::guard("web")->attempt($creds)) {
            $redirect = "app/";

            return redirect($redirect);
        } else {
            $errors = array("Error" => "Incorrecte gebruikersnaam of wachtwoord");

            return redirect("/")->withErrors($errors);
        }
        
    }
    
    public function logout(){
        if (Auth::guard("web")->check()) {
            Auth::guard("web")->logout();
        }
    }
}

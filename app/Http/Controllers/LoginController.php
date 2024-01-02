<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    // Logs user in
    public function login(Request $request){
        // Validates user input
        $validate = $request->validate([
            "name" => "required|string",
            "password" => "required|string",
        ]);

        // Checks if password belongs to user. If not, send user back with error message
        $creds = $request->only("name", "password");

        if (Auth::guard("web")->attempt($creds)) {
            $redirect = "app/";

            return redirect($redirect);
        } else {
            $errors = array("Error" => "Incorrecte gebruikersnaam of wachtwoord");

            return redirect("/")->withErrors($errors);
        }
        
    }
    
    // Logs user out
    public function logout(){
        if (Auth::guard("web")->check()) {
            Auth::guard("web")->logout();
        }
    }
}

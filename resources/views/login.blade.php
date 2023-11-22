<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
    crossorigin="anonymous">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Login</title>
</head>
<body>
    <div id="app" class="w-100 h-100">
        <div class="d-flex justify-content-center align-items-center bg-info w-100 h-100">
            <div class="card w-30">
                <div class="card-header">
                    <h1>Inloggen</h1>
                </div>
                <div class="card-body">
                    <form action="">
                        @csrf
                        <div>
                            <label for="username">Gebruikersnaam</label>
                            <input id="username" class="d-block" type="text" placeholder="Gebruikersnaam" name="username">
                        </div>
                        <div>
                            <label for="password">Wachtwoord</label>
                            <input id="password" class="d-block" type="password" placeholder="Gebruikersnaam" name="password">
                        </div>
                        <div>
                            <input type="submit">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
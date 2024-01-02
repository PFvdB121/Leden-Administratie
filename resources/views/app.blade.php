<!DOCTYPE html>
<html lang="en">
<head>
    @routes
    <!-- With @routes, I can use this application as a SPA -->
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    

    <!-- Laravel mix compiles and minifies my application css and javascript files in these files. They are escaped with brackets to prevent cross site scripting -->

    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
    crossorigin="anonymous">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <ion-app>
            <!-- The user info is saved inside session and accessed with Auth, which, to prevent cross site scripting, is escaped with double brackets -->
            <ionic-menu :user="{{ Auth::user()->first() }}">
                <!-- json_encode turns the $_GET into a json format, and double brackets escapes the result to prevent cross site scripting-->
                <router-view :get="{{ json_encode($_GET) }}"></router-view>
            </ionic-menu>
        </ion-app>
    </div>
</body>
</html>
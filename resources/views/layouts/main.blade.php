<!DOCTYPE html>
<html lang="es" ng-app="JarvisPlatform">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @include('jplatformui::partials.meta')
    </head>
    <body class="login-page">
        @yield('content')
        @include('jplatformui::partials.footer_meta')
    </body>
</html>

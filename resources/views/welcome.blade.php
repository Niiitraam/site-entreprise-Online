<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/6434cb6a94.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{secure_asset('css/style.css')}}">
    
    <title>Main</title>
</head>
<body>
    <div class="div-loader">
        <div class="div-gauche">
            <img src="{{secure_asset('image/logo-black.jpg')}}" class="img-loader" alt="">
        </div>
        <div class="div-droite">
            <h1 class="h1-loader">Agence</h1>
        </div>
    </div>
        @include('partial/navbar')
        @include('page/home')
        <div class="div-cache">
            @include('page/about')
            @include('page/service')
        </div>

    
    @include('partial/reseau')


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="{{secure_asset('js/main.js')}}"></script>
</body>
</html>
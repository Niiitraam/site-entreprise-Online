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
<body data-barba="wrapper">
    <div class="load-container">
        <div class="loading-screen"></div>
    </div>
    <div class="div-loader">
        <div class="div-gauche">
            <img src="{{secure_asset('image/logo-dark.webp')}}" class="img-loader" alt="">
            <p class="p-phone">Bienvenue chez MM</p>
        </div>
    </div>
    @include('partial/navbar')
    <div data-barba="container" data-barba-namespace="home-section">
            
            @include('page/home')
            <div class="div-cache">
                @include('page/about')
                @include('page/service')
                @include('page/projet')
            </div>
    </div>
        

    
    @include('partial/reseau')

    
    <script src="https://unpkg.com/@barba/core"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

    
    <script src="{{secure_asset('js/main.js')}}"></script>
</body>
</html>
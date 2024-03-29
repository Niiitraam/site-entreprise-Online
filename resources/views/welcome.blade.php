<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/6434cb6a94.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{secure_asset('css/style.css')}}">

    <title>MM - Home</title>
</head>
<body data-barba="wrapper">
    <div class="load-container">
        <div class="loading-screen"></div>
    </div>
    <div class="cursor"></div>
    <div class="scrollbar"></div>
    <div class="clickScrollbar"></div>
    <div class="div-loader">
        <div class="div-gauche">
            <div class="div-animation-loader">
                <div class="rond-loader rond1"></div>
                <div class="rond-loader rond2"></div>
                <div class="rond-loader rond3"></div>
                <div class="rond-loader rond4"></div>
            </div>
        </div>
    </div>
    @include('partial/navbar')
    <div data-barba="container" data-barba-namespace="home-section">
            
            @include('page/home')
            <div class="div-cache">
                @include('page/about')
                @include('page/service')
                @include('page/projet')
                @include('contact/contact')
            </div>
    </div>
    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>

    <script src="{{secure_asset('js/main.js')}}"></script>
</body>
</html>

{{-- https://greensock.com/forums/topic/22867-reset-timeline-after-barbajs-page-transition/ --}}
{{-- https://github.com/barbajs/barba/issues/485 --}}
{{-- https://greensock.com/forums/topic/33292-gsap-and-barbajs/#comment-166928 --}}
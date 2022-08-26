<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{secure_asset('css/style.css')}}">
    

    <title>Document</title>
</head>

<body data-barba="wrapper">
    <div class="cursor"></div>
    @include('partial/navbar')
    <div data-barba="container" date-barba-namespace="projet1-section">
        <section class="section-projet-unanime" id="projet1">
            <div class="div-photo-projet1">
                <img src="{{secure_asset('image/projet/isabel-gomez.webp')}}" class="photo-projet1" alt="">
            </div>
    
            <div class="div-description">
                <h3 class="h3-projet color-isabel">Isabel Gomez Interiors</h3>
                <div class="border-projet1 bg-color-isabel"></div>
            </div>
            <div class="category-projet">
                <div class="li-projet-view">
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-isabel">Category</p>
                        <p class="texte2-projet-view">Web development<br>UX/UI Design</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-isabel">Year</p>
                        <p class="texte2-projet-view">2021</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-isabel">Team</p>
                        <p class="texte2-projet-view">Martin Manderveld<br>Jordano Cubbedu<br>Cédric Correia</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-isabel">Client</p>
                        <p class="texte2-projet-view">Isabel Gomez Interiors</p>
                    </div>
                    
                    
                </div>
                <div class="div-story-projet">
                    <p class="p-story-projet">Isabel Gomez Interiors est une entreprise belge d'architecte d'interieur. Leur but est de créer des intérieurs qui sont à la fois sophistiqués et détendus. L'objectif était de refondre le site belge en mettant l'accent sur le design.</p>
                    <a href="https://isabelgomezinteriors.com/" class="lien-vers-site" target="__blank">voir le site</a>
                </div>
            </div>
            <div class="div-photo-projet-view">
                <p class="titre-projet-view">Page d'accueil</p>
                <img src="{{secure_asset('image/projet/projet-isabel/isabel1.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Menu</p>
                <img src="{{secure_asset('image/projet/projet-isabel/isabel2.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Contact</p>
                <img src="{{secure_asset('image/projet/projet-isabel/isabel3.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Page Projet</p>
                <img src="{{secure_asset('image/projet/projet-isabel/isabel4.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Page Boutique</p>
                <img src="{{secure_asset('image/projet/projet-isabel/isabel5.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Page graphisme</p>
                <img src="{{secure_asset('image/projet/projet-isabel/isabel6.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Footer</p>
                <img src="{{secure_asset('image/projet/projet-isabel/isabel7.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
            </div>
        </section>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
    {{-- <script src="https://unpkg.com/@barba/core"></script> --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>

    <script src="{{secure_asset('js/main.js')}}"></script>
    
</body>
</html>
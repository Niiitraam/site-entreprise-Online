<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    

    <title>Document</title>
</head>

<body data-barba="wrapper">
    <div class="cursor"></div>
    @include('partial/navbar')
    <div data-barba="container" date-barba-namespace="projet1-section">
        <section class="section-projet-unanime" id="projet1">
            <div class="div-photo-projet1">
                <img src="{{asset('image/projet/martin-design.webp')}}" class="photo-projet1" alt="">
            </div>
    
            <div class="div-description">
                <h3 class="h3-projet color-martin">My First Portfolio</h3>
                <div class="border-projet1 bg-color-martin"></div>
            </div>
            <div class="category-projet">
                <div class="li-projet-view">
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-martin">Category</p>
                        <p class="texte2-projet-view">Web development<br>UX/UI Design</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-martin">Year</p>
                        <p class="texte2-projet-view">2021</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-martin">Team</p>
                        <p class="texte2-projet-view">Martin Manderveld</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-martin">Client</p>
                        <p class="texte2-projet-view">/</p>
                    </div>
                    
                    
                </div>
                <div class="div-story-projet">
                    <p class="p-story-projet">En sortant de ma formation, j'ai voulu me faire un site vitrine avec mes projets. Quand je regarde ce site maintenant, je vois mon évolution dans le domaine.</p>
                    <a href="http://infinite-journey-94662.herokuapp.com/fr" class="lien-vers-site" target="__blank">voir le site</a>
                </div>
            </div>
            <div class="div-photo-projet-view">
                <p class="titre-projet-view">Loader</p>
                <img src="{{asset('image/projet/projet-martin/martin1.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">First Section</p>
                <img src="{{asset('image/projet/projet-martin/martin2.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">About us</p>
                <img src="{{asset('image/projet/projet-martin/martin3.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Section Professionnal career</p>
                <img src="{{asset('image/projet/projet-martin/martin4.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Projects</p>
                <img src="{{asset('image/projet/projet-martin/martin5.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Contact</p>
                <img src="{{asset('image/projet/projet-martin/martin6.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
            </div>
        </section>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/@barba/core"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>
    <script class="main-script" src="{{asset('js/main.js')}}"></script>
    
</body>
</html>
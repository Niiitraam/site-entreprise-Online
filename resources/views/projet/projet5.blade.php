<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{secure_asset('css/style.css')}}">
    

    <title>MM - Scheerlinck</title>
</head>

<body data-barba="wrapper">
    <div class="cursor"></div>
    @include('partial/navbar')
    <div data-barba="container" date-barba-namespace="projet1-section">
        <section class="section-projet-unanime" id="projet1">
            <div class="div-photo-projet1">
                <img src="{{secure_asset('image/projet/scheerlinck.webp')}}" class="photo-projet1 border-anne" alt="">
            </div>
    
            <div class="div-description">
                <h3 class="h3-projet color-anne">Scheerlinck</h3>
                <div class="border-projet1 bg-color-anne"></div>
            </div>
            <div class="category-projet">
                <div class="li-projet-view">
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-anne">Category</p>
                        <p class="texte2-projet-view">Web development</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-anne">Year</p>
                        <p class="texte2-projet-view">2022</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-anne">Team</p>
                        <p class="texte2-projet-view"><a href="https://skydoo.com/fr/" target="__blank" class="lien-skydoo lien-cursor">Skydoo</a><br>Martin Manderveld</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-anne">Client</p>
                        <p class="texte2-projet-view">Scheerlinck</p>
                    </div>
                    
                    
                </div>
                <div class="div-story-projet">
                    <p class="p-story-projet">Scheerlinck est un client néerlandophone pour qui j'ai du réaliser un site vitrine.</p>
                    <a href="https://loodgieter-js.be/" class="lien-vers-site" target="__blank">voir le site</a>
                </div>
            </div>
            <div class="div-photo-projet-view">
                <p class="titre-projet-view">Home</p>
                <img src="{{secure_asset('image/projet/projet-scheerlinck/projet1-scheerlinck.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Renovation</p>
                <img src="{{secure_asset('image/projet/projet-scheerlinck/projet3-scheerlinck.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Contact</p>
                <img src="{{secure_asset('image/projet/projet-scheerlinck/projet4-scheerlinck.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Footer</p>
                <img src="{{secure_asset('image/projet/projet-scheerlinck/projet2-scheerlinck.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
            </div>
        </section>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>

    <script src="{{secure_asset('js/main.js')}}"></script>

</body>
</html>
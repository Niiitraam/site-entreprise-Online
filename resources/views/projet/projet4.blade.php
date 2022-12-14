<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{secure_asset('css/style.css')}}">

    <title>MM - Anne Thiry</title>
</head>

<body data-barba="wrapper">
    <div class="cursor"></div>
    @include('partial/navbar')
    <div data-barba="container" date-barba-namespace="projet1-section">
        <section class="section-projet-unanime" id="projet1">
            <picture class="div-photo-projet1">
                <source type="image/webp" srcset="{{secure_asset('image/projet/anne-thiry.webp')}}" alt="logo anne thiry" class="photo-projet1 border-anne">
                <img src="{{secure_asset('image/projet/anne-thiry.jpg')}}" class="photo-projet1 border-anne" alt="logo anne thiry">
            </picture>
    
            <div class="div-description">
                <h3 class="h3-projet color-anne">Anne Thiry</h3>
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
                        <p class="texte2-projet-view">Anne Thiry Papelotte</p>
                    </div>
                    
                    
                </div>
                <div class="div-story-projet">
                    <p class="p-story-projet">Anne Thiry est une formatrice indépendante, passionée par les chevaux, qui propose des cours et des formations d'équitation. Voici le premier site que j'ai créé chez Skydoo.</p>
                    <a href="https://annethiry-papelotte.be/" class="lien-vers-site" target="__blank">voir le site</a>
                </div>
            </div>
            <div class="div-photo-projet-view">
                <picture>
                    <p class="titre-projet-view">Home</p>
                    <source type="image/webp" srcset="{{secure_asset('image/projet/projet-anne-thiry/photo1-anne.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                    <img src="{{secure_asset('image/projet/projet-anne-thiry/photo1-anne.jpg')}}" alt="photo 1 anne" class="photo-taille-projet">
                </picture>
                <picture>
                    <p class="titre-projet-view">About us</p>
                    <source type="image/webp" srcset="{{secure_asset('image/projet/projet-anne-thiry/photo1-anne.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                    <img src="{{secure_asset('image/projet/projet-anne-thiry/photo2-anne.jpg')}}" alt="photo 2 anne" class="photo-taille-projet">
                </picture>
                <picture>
                    <p class="titre-projet-view">Experience</p>
                    <source type="image/webp" srcset="{{secure_asset('image/projet/projet-anne-thiry/photo1-anne.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                    <img src="{{secure_asset('image/projet/projet-anne-thiry/photo3-anne.jpg')}}" alt="photo 3 anne" class="photo-taille-projet">
                </picture>
                <picture>
                    <p class="titre-projet-view">Classes and Formations</p>
                    <source type="image/webp" srcset="{{secure_asset('image/projet/projet-anne-thiry/photo1-anne.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                    <img src="{{secure_asset('image/projet/projet-anne-thiry/photo4-anne.jpg')}}" alt="photo 4 anne" class="photo-taille-projet">
                </picture>
                <picture>
                    <p class="titre-projet-view">Footer</p>
                    <source type="image/webp" srcset="{{secure_asset('image/projet/projet-anne-thiry/photo1-anne.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                    <img src="{{secure_asset('image/projet/projet-anne-thiry/photo5-anne.jpg')}}" alt="photo 5 anne" class="photo-taille-projet">
                </picture>
            </div>
        </section>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" ></script>
    <script src="{{secure_asset('js/main.js')}}"></script>

</body>
</html>
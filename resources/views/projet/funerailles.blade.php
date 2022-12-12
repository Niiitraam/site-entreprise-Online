<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M6Q46GFXCL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M6Q46GFXCL');
</script>

    <title>MM - Rénovation DR</title>
</head>

<body data-barba="wrapper">
    <div class="cursor"></div>
    @include('partial/navbar')
    <div data-barba="container" date-barba-namespace="projet1-section">
        <section class="section-projet-unanime" id="projet1">
            <div class="div-photo-projet1">
                <img src="{{asset('image/projet/renovation.webp')}}" class="photo-projet1" alt="">
            </div>
    
            <div class="div-description">
                <h3 class="h3-projet color-renovation">Funérailles Simon & Fils</h3>
                <div class="border-projet1 bg-color-renovation"></div>
            </div>
            <div class="category-projet">
                <div class="li-projet-view">
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-renovation">Category</p>
                        <p class="texte2-projet-view">Web development<br>UX/UI Design</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-renovation">Year</p>
                        <p class="texte2-projet-view">2022</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-renovation">Team</p>
                        <p class="texte2-projet-view"><a href="https://skydoo.com/fr/" target="__blank" class="lien-skydoo lien-cursor">Skydoo</a><br>Martin Manderveld</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-renovation">Client</p>
                        <p class="texte2-projet-view">Funérailles Simon & Fils</p>
                    </div>
                    
                    
                </div>
                <div class="div-story-projet">
                    <p class="p-story-projet">Funérailles Simon & Fils est une entreprise de Pompes Funèbres situé à Liège. La cliente avait besoin d'une nouveau site incluant une boutique de vente de fleurs. C'est pourquoi, nous avons développé un E-commerce moderne.</p>
                    <a href="https://renovationdr.be/" class="lien-vers-site" target="__blank">voir le site</a>
                </div>
            </div>
            <div class="div-photo-projet-view">
                <p class="titre-projet-view">Menu</p>
                <img src="{{asset('image/projet/projet-renovation/photo6.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Home</p>
                <img src="{{asset('image/projet/projet-renovation/photo1.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">About Us</p>
                <img src="{{asset('image/projet/projet-renovation/photo2.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Big work</p>
                <img src="{{asset('image/projet/projet-renovation/photo3.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Contact</p>
                <img src="{{asset('image/projet/projet-renovation/photo4.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
                <p class="titre-projet-view">Footer</p>
                <img src="{{asset('image/projet/projet-renovation/photo5.webp')}}" alt="photo 1 isabel" class="photo-taille-projet">
            </div>
        </section>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>

    <script src="{{asset('js/main.js')}}"></script>
    
</body>
</html>
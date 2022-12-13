<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{secure_asset('css/style.css')}}">
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
                <img src="{{secure_asset('image/projet/funeraillessimon&fils.webp')}}" class="photo-projet1" alt="">
            </div>
    
            <div class="div-description">
                <h3 class="h3-projet color-simon">Funérailles Simon & Fils</h3>
                <div class="border-projet1 bg-color-simon"></div>
            </div>
            <div class="category-projet">
                <div class="li-projet-view">
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-simon">Category</p>
                        <p class="texte2-projet-view">Web development<br>UX/UI Design</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-simon">Year</p>
                        <p class="texte2-projet-view">2022</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-simon">Team</p>
                        <p class="texte2-projet-view"><a href="https://skydoo.com/fr/" target="__blank" class="lien-skydoo lien-cursor">Skydoo</a><br>Martin Manderveld</p>
                    </div>
                    <div class="ligne-projet">
                        <p class="texte-projet-view color-simon">Client</p>
                        <p class="texte2-projet-view">Funérailles Simon & Fils</p>
                    </div>
                    
                    
                </div>
                <div class="div-story-projet">
                    <p class="p-story-projet">Funérailles Simon & Fils est une entreprise de Pompes Funèbres situé à Liège. La cliente avait besoin d'un nouveau site incluant une boutique de vente de fleurs. C'est pourquoi, nous avons développé un E-commerce moderne.</p>
                    <a href="https://funeraillessimon.be/" class="lien-vers-site" target="__blank">voir le site</a>
                </div>
            </div>
            <picture class="div-photo-projet-view">
                <p class="titre-projet-view">Home</p>
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/home.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/home.png')}}" alt="photo 1 home" class="photo-taille-projet">
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/home-2.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/home-2.png')}}" alt="photo 2 home" class="photo-taille-projet">
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/video-home.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/video-home.png')}}" alt="Vidéo" class="photo-taille-projet">
                <p class="titre-projet-view">Page Service</p>
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/service.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/service.png')}}" alt="Photo service" class="photo-taille-projet">
                <p class="titre-projet-view">Page Assistance</p>
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/page-assistance.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/page-assistance.png')}}" alt="photo assistance" class="photo-taille-projet">
                <p class="titre-projet-view">Page Boutique</p>
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/boutique.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/boutique.png')}}" alt="photo boutique" class="photo-taille-projet">
                <p class="titre-projet-view">Footer</p>
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/footer.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/footer.png')}}" alt="footer" class="photo-taille-projet">
                <p class="titre-projet-view">Page Contact</p>
                <source type="image/webp" srcset="{{secure_asset('image/projet/projet-simon&fils/contact.webp')}}" alt="photo 1 home" class="photo-taille-projet">
                <img src="{{secure_asset('image/projet/projet-simon&fils/contact.png')}}" alt="photo contact" class="photo-taille-projet">
            </picture>
        </section>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>

    <script src="{{secure_asset('js/main.js')}}"></script>
    
</body>
</html>
//navbar

let toggle = document.querySelector('.toggle')
let body = document.querySelector('body')

toggle.addEventListener('click', function(){
    body.classList.toggle('open')
})

//card service

let card = document.getElementsByClassName('location')
let cardBox = Array.from(card)

cardBox.forEach((element, index) =>{
    element.addEventListener('mouseover', function(){
        toucher(index)
    })
    element.addEventListener('mouseout', function(){
        toucherOut(index)
    })
})

function toucher(i){
    cardBox[i].classList.add('flip')
}

function toucherOut(i){
    cardBox[i].classList.remove('flip')
}

// Greensock


//loader
let divLoader = document.querySelector('.div-loader')
let divGauche = document.querySelector('.div-gauche')
let divDroite = document.querySelector('.div-droite')
let imageLoader = document.querySelector('.img-loader')
let titre = document.querySelector('.h1-loader')
let divAccueil = document.querySelector('.div-home')
let divCache = document.querySelector('.div-cache')

let divHome = document.querySelector('.border-home')
let ligne = document.querySelector('.ligne')
let scrollHome = document.querySelector('.scroll-home')

let logo = document.querySelector('.div-logo')
let divLien = document.querySelectorAll('.div-lien')

let TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'elastic',
    }
});

TL
.to(imageLoader, {y:0, opacity:1})
.to(titre, {y:0, opacity:1}, 0)
.to(divAccueil, {display:'flex'})
.to(divGauche, {y:'-100%', ease: 'power4'})
.to(divDroite, {y: '100%', ease: 'power4'}, '-=0.75')
.to(divLoader, {display: 'none', duration:.1})
.to(divCache, {display:'block'}, '-=0.01')
//fin loader
//debut home et navbar
.to(logo, {y:0, ease:'power4', opacity:1}, '<')
.to(divLien, {y:0, ease:'power4', opacity:1}, '<')
.to(divHome, {x:0, opacity:1, duration:1, ease:'power4'}, '-=0.75')
.to(ligne, {height:'5vh', ease:'power4'})
.to(scrollHome, {y:0, ease:'power4', opacity:1}, '-=0.75')
//fin home et navbar

// fin greensock
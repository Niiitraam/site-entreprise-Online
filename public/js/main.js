//navbar


// ouverture
let toggle = document.querySelector('.toggle')
let body = document.querySelector('body')

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
    gsap.to(divLien, {y:0, ease:'power4', opacity:1})
    if(body.classList.contains('open')== true){
        body.classList.add('overflow');
    }else{
        body.classList.remove('overflow');
    }
})

let rond = document.querySelector('.rondAutour')
let burger = document.querySelector('.ouvrir')

let ouvrirTourne = [rond, burger]

ouvrirTourne.forEach((element, index) =>{
    element.addEventListener('mouseover', function(){
        gsap.to(burger, {rotation:180})
    })
    element.addEventListener('mouseout', function(){
        gsap.to(burger, {rotation:'0'})
    })
})

let fermer = document.querySelector('.fermer')

let fermerTourne = [rond, fermer]

fermerTourne.forEach((element, index) =>{
    element.addEventListener('mouseover', function(){
        gsap.to(fermer, {rotation:180, y:30})
    })
    element.addEventListener('mouseout', function(){
        gsap.to(fermer, {rotate:0, y:30})
    })
})


// lien navbar slide
let lienImpair = document.querySelectorAll('.s1')
let tableauImpair = Array.from(lienImpair)

let lienPair = document.querySelectorAll('.s2')
let tableauPair = Array.from(lienPair)

let lienColor = document.querySelectorAll('.s1-color')
let tableauColor = Array.from(lienColor)

let lienColor2 = document.querySelectorAll('.s2-color')
let tableauColor2 = Array.from(lienColor2)


tableauImpair.forEach((element, index) =>{
    element.addEventListener('mouseover', function(){
        s1In(index)
    })
    element.addEventListener('mouseout', function(){
        s1Out(index)
    })
})

function s1In(i){
    tableauColor[i].style.color = '#ECFD18';
    gsap.to(tableauColor[i], {paddingLeft:200, duration:.1})
}

function s1Out(i){
    tableauColor[i].style.color = 'white';
    gsap.to(tableauColor[i], {paddingLeft:0, duration:.1})
}

tableauPair.forEach((element, index) =>{
    element.addEventListener('mouseover', function(){
        s2In(index)
    })
    element.addEventListener('mouseout', function(){
        s2Out(index)
    })
})

function s2In(i){
    tableauColor2[i].style.color = '#ECFD18';
    gsap.to(tableauColor2[i], {paddingRight:200, ease:'power1', duration:.1})
}

function s2Out(i){
    tableauColor2[i].style.color = 'white';
    gsap.to(tableauColor2[i], {paddingRight:0, ease:'power1', duration:.1})
}


// rond qui tourne autour du menu burger

let svgBlanc = document.querySelector('.rond-blanc')


if(window.matchMedia('(min-width:600px)').matches){
    gsap.to(svgBlanc, 20, {rotation:360, ease:Linear.easeNone, repeat:-1})
}else{
    gsap.to(svgBlanc, 0, {rotation:0, ease:'none', repeat:0})
}



//gsap pour changement de couleur

// gsap.registerPlugin(ScrollTrigger)

// gsap.to('header', {
//     scrollTrigger: "header",
//     backgroundColor:'black',
//     duration:1
// })


// Greensock


//loader
let divLoader = document.querySelector('.div-loader')
let divGauche = document.querySelector('.div-gauche')
let imageLoader = document.querySelector('.img-loader')
let divAccueil = document.querySelector('.div-home')
let divCache = document.querySelector('.div-cache')

let logo = document.querySelector('.div-logo')
let divLien = document.querySelectorAll('.div-lien')
let icone = document.querySelectorAll('.icone')

let textPhone = document.querySelector('.p-phone')


let TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power4',
    }
});

if(window.matchMedia('(min-width:600px)').matches){
    TL
    .to(imageLoader, {y:0, opacity:1})
    .to(textPhone, {y:0, opacity:1}, '<')
    .to(divAccueil, {display:'block'})
    .to(divGauche, {y:'-100%'})
    .to(divLoader, {display: 'none', duration:.1})
    .to(divCache, {display:'block'}, '-=0.01')

    //fin loader
    //debut home et navbar
    .to(logo, {y:0, opacity:1}, '<')
    .to(icone, {y:0, opacity:1},'<')
}else{
    TL
    .to(imageLoader, {y:0, opacity:1})
    .to(divAccueil, {display:'block'})
    .to(imageLoader, { width:'40%'})
    .to(textPhone, {y:0, ease:'power4', opacity:1}, '<')
    .to(divGauche, {y:'-100%'})
    .to(divLoader, {display: 'none', duration:.1})
    .to(divCache, {display:'block'}, '<')

    //fin loader
    //debut home et navbar
    .to(logo, {y:0, opacity:1}, '<')
    .to(icone, {y:0, opacity:1},'<')
}


//fin home et navbar

// Projet


// Photo et flèche
let lienProjet = document.querySelectorAll('.a-projet')
let tableauLienProjet = Array.from(lienProjet)

let imgProjet = document.querySelectorAll('.img-projet')
let tableauImgProjet = Array.from(imgProjet)

let croix = document.querySelectorAll('.li-projet')
let tableauCroix = Array.from(croix)


tableauLienProjet.forEach((element, index) => {
    element.addEventListener('mouseover', function(){
        tableauImgProjet[index].style.display = 'block';
        gsap.to(tableauImgProjet[index], {opacity:1, ease:'elastic', duration:1, scale:1})
        gsap.to(tableauCroix[index], {x:0, ease:'elastic', duration:1,})
    })
    element.addEventListener('mouseout', function(){
        tableauImgProjet[index].style.display = 'none';
        gsap.to(tableauImgProjet[index], {opacity:0, ease:'elastic', duration:1, scale:0})
        gsap.to(tableauCroix[index], {x:'-30', ease:'elastic', duration:1})
    })
})


// fin projet
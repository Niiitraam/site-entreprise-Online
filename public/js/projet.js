//navbar


// ouverture
let toggle = document.querySelector('.toggle')
let body = document.querySelector('body')

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
    gsap.to(divLien, {x:0, ease:'steps(5)', opacity:1, stagger:0.3})
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

// Greensock


//loader


let logo = document.querySelector('.div-logo')
let divLien = document.querySelectorAll('.div-lien')
let icone = document.querySelectorAll('.icone')


let TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'elastic',
    }
});

if(window.matchMedia('(min-width:600px)').matches){
    TL
    //debut home et navbar
    .to(logo, {y:0, opacity:1})
    .to(burger, {y:0, fontSize:'2rem', opacity:1}, '-=0.75')
    .to(rond, {y:0, opacity:1}, '<')
    .to(icone, {y:0, opacity:1},'<')
}else{
    TL
    //debut home et navbar
    .to(logo, {y:0, opacity:1}, '<')
    .to(burger, {y:0, fontSize:'2rem', opacity:1}, '<')
    .to(rond, {y:0, opacity:1}, '<')
    .to(icone, {y:0, opacity:1},'<')
}


//fin home et navbar


// rond blanc
let svgBlanc = document.querySelector('.rond-blanc')


if(window.matchMedia('(min-width:600px)').matches){
    gsap.to(svgBlanc, 0, {rotation:0, ease:'none', repeat:0, display:'none'})
}else{
    gsap.to(svgBlanc, 0, {rotation:0, ease:'none', repeat:0})
}
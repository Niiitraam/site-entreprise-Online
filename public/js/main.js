// cursor

let cursor = document.querySelector('.cursor');

gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
})

document.addEventListener('mousemove', e =>{
    gsap.set(cursor,{
        x:e.x,
        y:e.y,
    })
})

let lienCursor = document.querySelectorAll('.lien-cursor')
let tableauCursor = Array.from(lienCursor)

tableauCursor.forEach(element=> {
    element.addEventListener('mouseover', function(){
        gsap.to(cursor, {
            scale:5,
            backgroundColor:'white',
            mixBlendMode:'difference',
            border:'none',
        })
    })
    element.addEventListener('mouseout', function(){
        gsap.to(cursor, {
            scale:1,
            backgroundColor:'transparent',
            mixBlendMode: 'unset',
            border: '2px solid black'
        })
    })
})


// changement de page

function delay(n){
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}


function pageTransition(){
    let tl = gsap.timeline();
    
    tl
    .to(fermerTest, {display:'none', duration:0.01})
    .to(ouvrirTest, {display:'block'}, '<')
    .to('.loading-screen', {
        duration:1.2,
        height:"100%",
        top:'0%',
        ease:'Expo.easeInOut',
    },'<')
    .to('.loading-screen', {
        duration:1,
        height:"100%",
        top:"100%",
        ease:'Expo.easeInOut',
        delay:0.3,
    })
    .to('.ul-navbar', {
        y:'-100%',
        duration:0.1,
    }, '-=0.90')
    .to('.deuxieme-slide', {
        y:'-100%',
        duration:0.1
    }, '<')
    
    
    
}

function contentAnimation(){
    document.querySelector('body').classList.remove('overflow')
    document.querySelector('body').classList.remove('open')
}

barba.init({
    sync:true,

    transitions:[{
        async leave(data){
            let done = this.async();

            pageTransition();
            await delay(1500);

            done();
        },

        async enter(data){
            contentAnimation()
        },

        async once(date){
            contentAnimation()
        }
    }]
})
// ouverture //navbar
let body = document.querySelector('body')
let rondNoir = document.querySelector('.rondAutour')
let ouvrirTest = document.querySelector('.ouvrir')
let fermerTest = document.querySelector('.fermer')

rondNoir.addEventListener('click', function(){
    if(rondNoir.classList.contains('normal') == true){
        let tl = gsap.timeline();
        tl
        .to(ouvrirTest, {display:'none',duration:0.01})
        .to(fermerTest, {display:'flex', justifyContent:'center', alignItems:'center'}, '<')
        .to('.deuxieme-slide', {y:0, ease:'Expo.easeInOut', duration:1}, '<') 
        .to('.ul-navbar', {y:0, ease:'Expo.easeInOut', duration:1.2},'-=0.75')
        
        .to(divLien, {y:0, ease:'Expo.easeInOut', opacity:1, stagger:{
            each:0.15
        }}, '-=0.50')
        rondNoir.classList.remove('normal')
        body.classList.add('overflow');
        
    }else{
        let tl = gsap.timeline();
        tl
        .to(fermerTest, {display:'none', duration:0.01})
        .to(ouvrirTest, {display:'block'}, '<')
        .to(divLien, {y:'-200px', ease:'Expo.easeInOut', opacity:0, stagger:{
            each:0.15
        }}, '-=0.50')
        .to('.ul-navbar', {y:'-100%', ease:'Expo.easeInOut', duration:1.2},'<')
        .to('.deuxieme-slide', {y:'-100%', ease:'Expo.easeInOut', duration:1}, '-=0.75') 
        rondNoir.classList.add('normal')
        body.classList.remove('overflow')

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
    tableauColor[i].style.color = 'black';
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
    tableauColor2[i].style.color = 'black';
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
let divAccueil = document.querySelector('.div-home')
let divCache = document.querySelector('.div-cache')

let rondLoader1 = document.querySelector('.rond1')
let rondLoader2 = document.querySelector('.rond2')
let rondLoader3 = document.querySelector('.rond3')
let rondLoader4 = document.querySelector('.rond4')

let logo = document.querySelector('.div-logo')
let divLien = document.querySelectorAll('.div-lien')
let icone = document.querySelectorAll('.icone')

let borderGauche = document.querySelector('.border-gauche-home')
let borderDroite = document.querySelector('.border-droite-home')
let borderGaucheBottom = document.querySelector('.border-gauche-bottom')
let borderDroiteBottom = document.querySelector('.border-droite-bottom')
let borderMilieu = document.querySelector('.border-milieu-home')

let h1Home = document.querySelector('.h1-home');
let h2Home = document.querySelector('.h2-home')
let imgHome = document.querySelector('.img-home')
let pCreative = document.querySelector('.p-creative')

let TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power4',
    }
});



if(window.matchMedia('(min-width:600px)').matches){
    TL
    .to(rondLoader1, {y:0, ease:'elastic', opacity:1})
    .to(rondLoader2, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(rondLoader3, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(rondLoader4, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(divAccueil, {display:'flex'})
    .to(divGauche, {y:'100%', ease:'Expo.easeInOut'})
    .to(divLoader, {display: 'none', duration:.1})
    .to(divCache, {display:'block'}, '-=0.01')

    //fin loader
    //debut home et navbar
    .to(logo, {y:0, opacity:1}, '<')
    .to(icone, {y:0, opacity:1},'<')
    .to(h1Home, {y:0, opacity:1}, '-=0.75')
    .to(h2Home, {y:0, opacity:1}, '-=0.75')
    .to(imgHome, {y:'-50%', opacity:1}, '-=0.75')
    .to(pCreative, {y:0, opacity:1}, '-=0.75')
    .to(borderGauche, {duration:1, left:'0%', width:"50%", ease:'power4'}, '-=0.75')
    .to(borderDroite, {duration:1, right:'0%', width:"50%", ease:'power4'}, '<')
    .to(borderMilieu, {duration:1, height:'100%'}, '-=0.75')
    .to(borderGaucheBottom, {duration:1, left:'0%', width:"50%", ease:'power4'}, '-=0.75')
    .to(borderDroiteBottom, {duration:1, right:'0%', width:"50%", ease:'power4'}, '<')
}else{
    TL
    .to(rondLoader1, {y:0, ease:'elastic', opacity:1})
    .to(rondLoader2, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(rondLoader3, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(rondLoader4, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(divAccueil, {display:'flex'})
    .to(divGauche, {y:'100%'})
    .to(divLoader, {display: 'none', duration:.1})
    .to(divCache, {display:'block'}, '<')

    //fin loader
    //debut home et navbar
    .to(logo, {y:0, opacity:1}, '<')
    .to(icone, {y:0, opacity:1},'<')
    .to(h1Home, {y:0, opacity:1}, '-=0.75')
    .to(h2Home, {y:0, opacity:1}, '-=0.75')
    .to(imgHome, {y:'-50%', opacity:1}, '-=0.75')
    .to(pCreative, {y:0, opacity:1}, '-=0.75')
    .to(borderGauche, {duration:1, left:'0%', width:"50%", ease:'power4'}, '-=0.75')
    .to(borderDroite, {duration:1, right:'0%', width:"50%", ease:'power4'}, '<')
    .to(borderMilieu, {duration:1, height:'100%'}, '-=0.75')
    .to(borderGaucheBottom, {duration:1, left:'0%', width:"50%", ease:'power4'}, '-=0.75')
    .to(borderDroiteBottom, {duration:1, right:'0%', width:"50%", ease:'power4'}, '<')
}


//fin home et navbar

// Section projet


let navLink = gsap.utils.toArray('.lien-projet'),
    imgWrap = document.querySelector('.img-wrapper'),
    imgItem = document.querySelector('.img-placeholder img');

tableauLink = Array.from(navLink)

let divProjet = document.querySelector('.element-projet')

tableauLink.forEach(element => {
    element.addEventListener('mouseover', () => {
        divProjet.style.overflow = 'hidden'
    })
    element.addEventListener('mouseout', () => {
        divProjet.style.overflow = 'unset'
    })
})

function moveImg(e){
    let mouseX = e.clientX,
        mouseY = e.clientY
    tl = gsap.timeline();
    tl.to(imgWrap, {
        duration:1,
        x: mouseX,
        y: mouseY,
        ease: Expo.ease,
    })
}

function linkHover(e){
    if(e.type === 'mouseenter'){
        let imgSrc = e.target.dataset.src;
        let tl = gsap.timeline();
        
        tl.set(imgItem, {
            attr: {src: imgSrc}
        }).to(imgWrap, {
            autoAlpha: 1,
            scale:1,
            
        })
    }else if(e.type === 'mouseleave'){
        let tl = gsap.timeline();
        tl.to(imgWrap, {
            autoAlpha:0,
            scale:0.3,
        })
    }
}

function initAnimation(){
    navLink.forEach(link => {
        link.addEventListener('mouseenter', linkHover)
        link.addEventListener('mouseleave', linkHover)
        link.addEventListener('mousemove', moveImg)
    })
}

function init(){
    initAnimation();
}

window.addEventListener('load', function(){
    init();
})
// fin  section projet


// scrollbar

let progressBar = document.querySelector('.scrollbar')

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    let progress = (document.documentElement.scrollTop / totalHeight) * 100;

    progressBar.style.height =  `${progress}%`;
    progressBar.style.opacity = `${progress}%`;
})

// fin scrollbar


// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
//     eval(container.querySelector("script").innerHTML);
// });




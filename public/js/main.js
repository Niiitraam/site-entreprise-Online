
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

// function delay(n){
//     n = n || 2000;
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n)
//     })
// }


// function pageTransition(){
//     let tl = gsap.timeline();
    
//     tl
//     .to(fermerTest, {display:'none', duration:0.01})
//     .to(ouvrirTest, {display:'block'}, '<')
//     .to('.loading-screen', {
//         duration:1.2,
//         height:"100%",
//         top:'0%',
//         ease:'Expo.easeInOut',
//     },'<')
//     .to('.loading-screen', {
//         duration:1,
//         height:"100%",
//         top:"100%",
//         ease:'Expo.easeInOut',
//         delay:0.3,
//     })
//     .to('.ul-navbar', {
//         y:'-100%',
//         duration:0.1,
//     }, '-=0.90')
//     .to('.deuxieme-slide', {
//         y:'-100%',
//         duration:0.1
//     }, '<');
// }

// function contentAnimation(){
//     document.querySelector('body').classList.remove('overflow')
//     document.querySelector('body').classList.remove('open')
//     // document.querySelector('.div-cache').style.display = "block"
// }

// barba.hooks.enter(() => {
//     window.scrollTo(0,0);
// })

// barba.hooks.afterEnter( ( data, next ) => {
//     let script = document.createElement('script');
//         script.src = 'main.js';
//         next.container.appendChild(script);
//   } );


// barba.init({
//     debug:true,
//     sync:true,
//     transitions:[{
//         async leave(data){
//             let done = this.async();
//             pageTransition();
//             await delay(1500);
//             done();  
//             console.log(data.current.next)
//         },
//         async enter(data){
//             contentAnimation()
//             console.log('enter')
//         },
//         async once(data){
//             contentAnimation()
//         },
//         // beforeEnter(data, next){
//         //     let script = document.createElement('script');
//         //     script.src = "{{asset('js/main.js')}}";
//         //     document.body.appendChild(script.src);
//         // },
//     }],
//     // views: [{
//     //     namespace: 'home-section',
//     //     beforeEnter({ next }) {
//     //         // load the Google Map API script
//     //         let script = document.createElement('script');
//     //         script.src = "<script src='{{asset('js/main.js')}}'></script>";
//     //         console.log(script)
//     //         next.container.appendChild(script.src);
//     //       }
//     //     }
//     //   ]
// })


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



// rond qui tourne autour du menu burger

let svgBlanc = document.querySelector('.rond-blanc')


if(window.matchMedia('(min-width:600px)').matches){
    gsap.to(svgBlanc, 20, {rotation:360, ease:Linear.easeNone, repeat:-1})
}else{
    gsap.to(svgBlanc, 0, {rotation:0, ease:'none', repeat:0})
}

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
    // .to(divAccueil, {display:'flex'})
    .to(divGauche, {y:'100%', ease:'Expo.easeInOut'})
    .to(divLoader, {display: 'none', duration:.1})
    .to(divCache, {display:'block'}, '-=0.01')
    //fin loader
    //debut home et navbar
    .to(logo, {y:0, opacity:1}, '<')
}else{
    TL
    .to(rondLoader1, {y:0, ease:'elastic', opacity:1})
    .to(rondLoader2, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(rondLoader3, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    .to(rondLoader4, {y:0, ease:'elastic', opacity:1}, '-=0.75')
    // .to(divAccueil, {display:'flex'})
    .to(divGauche, {y:'100%'})
    .to(divLoader, {display: 'none', duration:.1})
    .to(divCache, {display:'block'}, '<')

    //fin loader
    //debut home et navbar
    .to(logo, {y:0, opacity:1}, '<')
}

//fin home et navbar

// Section projet


let navLink = gsap.utils.toArray('.lien-projet'),
    imgWrap = document.querySelector('.img-wrapper'),
    imgItem = document.querySelector('.img-placeholder img');

tableauLink = Array.from(navLink)

let divProjet = document.querySelector('.element-projet')

function moveImg(e){
    let mouseX = e.clientX,
        mouseY = e.clientY
    tl = gsap.timeline();
    tl.to(imgWrap, {
        duration:0.5,
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

// About us

let rondIcone = document.querySelectorAll('.icone-about')
let iconeAbout = Array.from(rondIcone)

iconeAbout.forEach((element, index) =>{
    element.addEventListener('mouseover', function(){
        scaleAbout(index)
    })
    element.addEventListener('mouseout', function(){
        scaleMin(index)
    })
})

function scaleAbout(i){
    gsap.to(iconeAbout[i], {scale:3})
}

function scaleMin(i){
    gsap.to(iconeAbout[i], {scale:1})
}


//  Photo about

gsap.to('.rectangle-photo', {
    y: "-100%",
    autoAlpha:1,
    scrollTrigger: {
        trigger: ".rectangle-photo",
        // avoir les markers
        // markers:true,
        // Trigger scroller
        start: "top center",
        end: "bottom bottom",
        // onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "play pause reverse reset",
        // onEnter: () => console.log('test'),
        // Faire que l'animation se déroule pendant le scroll
        scrub:1,
    }
})

// Faire que la div reste fixed pendant un certain temps
// ScrollTrigger.create({
//     trigger: ".div-about",
//     pin: true,
// })

// barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
//     eval(container.querySelector("script").innerHTML);
// });
// console.log(barba.Dispatcher)
// barba.Dispatcher.events()

//https://astrodigital.co/contact
//https://verbalplusvisual.com/about
//https://www.bradypatterson.design/
//https://barba.js.org/docs/advanced/third-party/


// Ancre

let lien = document.querySelectorAll('.a-lien');
let tableauLien = Array.from(lien)

tableauLien.forEach(element=> {
    element.addEventListener('click', function(){
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
})
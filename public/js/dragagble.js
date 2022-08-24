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
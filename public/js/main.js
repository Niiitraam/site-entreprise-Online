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
const square=document.querySelectorAll('.square')
const mole=document.querySelectorAll('.mole')
const timeLeft=document.querySelector('#time-left')
let score=document.querySelector('#score')

let result=0
let currentTime = timeLeft.textContent

function randomSquare(){
    square.forEach(classname=>{
        classname.classList.remove('mole')
    })
    let randomposition=square[Math.floor(Math.random() * 9)]
    randomposition.classList.add('mole')

    // assign the id of the randomposition to hitposition for us to use later
    hitposition=randomposition.id
}

square.forEach(id=>{
    id.addEventListener('mouseup',()=>{
        if(id.id===hitposition){
            result=result+1
            score.textContent=result
        }
    })
})

function movemole(){
    let timerid=null
    timerid=setInterval(randomSquare,1000)
}

movemole()


function countDown(){
    currentTime--
    timeLeft.textContent=currentTime
    if (currentTime === 0){
        clearInterval(timerid)
        alert('GAME OVER! Your final score is '+result)
    }
}

let timerid=setInterval(countDown,1000)
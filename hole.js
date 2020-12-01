const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
var timeLeft = document.querySelector('#time-left')

let lastHole;
let timeUp = false;
var score = 0;
var highScore=0;
let result = 0;

let currentTime = timeLeft.textContent;
//create a function to make a random time for mole to pop from the hole
function randomTime(min, max) { 
    

    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const index  = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    //prevent same hole from getting the same number
    if (hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(500, 1000); //get a random time to determine how long mole should peep
    const hole = randomHole(holes); //get the random hole from the randomHole function
    hole.classList.add('up'); //add the CSS class so selected mole can "pop up"
    setTimeout(() => {
        hole.classList.remove('up'); //make the selected mole "pop down" after a random time
        if(!timeUp) {
            console.log(timeUp);
            
           peep();
      ;
            
        }
    }, time);
}

function startGame() {


    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 30000) //show random moles for 20 seconds
    console.log(timeUp);


    t = timeLeft.textContent
        setInterval(() => {
         

            timeLeft.textContent = t
            if (t === 0) {
              highest(result);
            
                var finalHighest = getcookie(document.cookie);
             document.getElementById('highscore').innerText = finalHighest
                alert('Game Over! Your Final Score is ' + result + ', highest score is ' + finalHighest);

                timeLeft.textContent = 30
                score.textContent = 0;
                t = 30
                result = 0;

            }
            t--;
        }, 1000)
        
}

function wack(e){
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up'); //this refers to item clicked
    scoreBoard.textContent = score;
     document.getElementById("highScore").innerHTML=score;
     

}

moles.forEach(mole => mole.addEventListener('click', wack)); 
function reset() {
    scoreBoard.textContent = 0;
    timeLeft.textContent = 30;
    t = 30
    result = 0
    randomTime(0,0);
}




   

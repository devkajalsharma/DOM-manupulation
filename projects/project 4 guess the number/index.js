let form = document.getElementById('myForm')
let Guessfield = document.getElementById('Guessfield')
let button = document.getElementById('submitButton')
let guesses = document.querySelector('.guesses')
let guessesremaining = document.querySelector('.lastresult')
let Message = document.querySelector('.loworhigh')
let result = document.querySelector('#result')


let randomnumber = parseInt(Math.random() * 100 + 1)
let p = document.createElement('p')

let PrevGuesses = [];
let guessnum = 1
let playGame = true;


if(playGame){
    button.addEventListener("click", function (e) {
        e.preventDefault();
        let  guess = parseInt(Guessfield.value);
        validate(guess)
        // console.log(guess)

    })
   
}

// to validate the guess number //
function  validate(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
else if(guess < 1){
    alert("please enter a number more than 1")
}
else if(guess >100 ){
    alert("please enter a number less than 100")

}
 else{
    PrevGuesses.push(guess)
    if( guessnum === 11){
        cleanupguess(guess)
        displaymessage(`you have tried all 10 attempts your last random number was ${randomnumber}`)
        endGame()
   }
   else{
    cleanupguess(guess)
    checkguess(guess)

   }
    
 }
}

// to check whether it is equal low or higher to random number
function checkguess(guess){
if(guess > randomnumber){
    displaymessage(`number is too high`)
}
else if(guess < randomnumber){
    displaymessage(`number is too low`)
}
else{
    displaymessage(`bravo! you guessed the right number `)
    endGame()
}
}


// to clean input , push guesses to guesses, remailning number of guesses
function cleanupguess(guess){
    Guessfield.value = '';
    guesses.innerHTML = PrevGuesses;
    guessnum++;

    guessesremaining.innerHTML = `${10-guessnum}`
}


function displaymessage(message){
result.appendChild(p)
p.innerHTML = `<h2>${message}</h2>`
console.log(message)

}

function endGame(){
   Guessfield.value = "";
   Guessfield.setAttribute('disabled', '');
   playGame = false;
   p.classList.add(button)
   p.innerHTML=`start the new game`
   result.appendChild(p)
   newGame()
}

function newGame(){
    
}


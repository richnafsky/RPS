// Function that returns computer's choice//
function getComputerChoice(){
    let computerSelection = Math.floor(Math.random() * 3);
    
    if (computerSelection == 0) {
        computerSelection = 'rock'
        
    } else if (computerSelection == 1) {
        computerSelection = 'papper'
    }
    else {
        computerSelection = 'scissors'
    }

    return computerSelection;
    }

// define a variable that runs the funciton above for computer's choice//
let computerChoice = getComputerChoice();

// prints the computer's choice for the user to see//
console.log(computerChoice)





// Function that returns the user's choice//
function getHumanChoice(){
     let humanChoice = prompt("Rock, Papper, or Scissors?").toLowerCase();
    return humanChoice
}

// define a variable that runs the funciton above for user's choice//
let humanChoice = getHumanChoice();



// start a scoring system for each player//
let humanScore = 0;
let computerScore = 0;




//funciton that returns who won the game//
function playRound(){
    if (humanChoice == computerChoice) {
        return 'Draw'
    }
    else if (humanChoice == 'papper' & computerChoice == 'rock') {
        return 'You Win This Round!'
    }
    else if (humanChoice == 'rock' & computerChoice == 'scissors'){
        return 'You Win This Round!'
    }
    else if (humanChoice == 'scissors' & computerChoice == 'paper') {
        return 'You Win This Round!'
    }
    else {
        return 'You Lose This Round...'
    }
}


// starts a round of the game from the funciton above//
console.log(playRound())
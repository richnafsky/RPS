// create choice bank//
const choices = ['rock', 'paper', 'scissors']


// Function that returns computer's choice//
function getHumanChoice(){
        return prompt("Rock, Papper, or Scissors?").toLowerCase(); 
    }


// function that returns computer's choice
function getComputerChoice(){
        return choices[Math.floor(Math.random() * choices.length)];
    }   


//funciton that returns who won the game//
function findWinner(humanChoice, computerChoice){

    if (humanChoice == computerChoice) {
        return 'draw'
    }
    else if (humanChoice == 'paper' & computerChoice == 'rock' || 
             humanChoice == 'rock' & computerChoice == 'scissors' || 
             humanChoice == 'scissors' & computerChoice == 'paper') {
        
            return 'human'
    }
    
    else {
        return 'computer'
        }

    }

//function that plays the game//
function playGame(){
    //determine base for user and computer score//
    let computerScore = 0;
    let userScore = 0;
    
//let the game play for 5 rounds//
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let winner = findWinner(humanChoice, computerChoice);
        console.log(`Computer Choice: ${computerChoice} \nYour Choice: ${humanChoice}`)
        
//print out to tell user what their result is//
        if (winner == 'draw'){
            console.log('Draw...')
            null
        }
        else if (winner == 'human'){
            console.log('You Won This Round!')
            userScore += 1;
        }
        else {
            console.log('Computer won this round...')
            computerScore += 1;
        }
        //prints the user and computer score//
        console.log(computerScore);
        console.log(userScore);    
    }

    //at end of 5 rounds, prints the final result for user//
    if (userScore == computerScore){
        console.log("It's a Draw ....")
    }
    else if (userScore > computerScore) {
        console.log("You Won The Game!!!!")

    }
    else{
        console.log("The Computer Won The Game.... Better Luck Next Time......")
    }

    //prints final score to the user//
   console.log(`The Final Score is... \nUser: ${userScore} \nComputer: ${computerScore}`)
}


playGame();
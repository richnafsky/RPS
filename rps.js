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






    

function playGame(){
    let computerScore = 0;
    let userScore = 0;
    

    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let winner = findWinner(humanChoice, computerChoice);
        console.log(`Computer Choice: ${computerChoice} \nYour Choice: ${humanChoice}`)
        

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
        
        console.log(computerScore);
        console.log(userScore);
        
        
        
    }
    if (userScore == computerScore){
        console.log("It's a Draw ....")
    }
    else if (userScore > computerScore) {
        console.log("You Won The Game!!!!")

    }
    else{
        console.log("The Computer Won The Game.... Better Luck Next Time......")
    }
   console.log(`The Final Score is... \nUser: ${userScore} \nComputer: ${computerScore}`)
}


playGame();
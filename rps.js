// create choice bank//
const choices = ['rock', 'paper', 'scissors']

//creates a button using DOM for each user selection option
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

//shows the outcome of the game
const outcomeDiv = document.querySelector('.outcome')

//starts a scoreboard
let compScore = 0;
let userScore = 0;




// function that returns computer's choice
function getComputerChoice(){
        return choices[Math.floor(Math.random() * choices.length)];
    }   



// plays a round
const playGame = (humanChoice, computerChoice) => {
   
    if (humanChoice === computerChoice) {
        const p = document.createElement('p')
        p.innerText = `Draw.... You both picked ${humanChoice}\n\nScore:\n Computer: ${compScore}\nUser: ${userScore}`
        outcomeDiv.appendChild(p)

    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        userScore += 1
        const p = document.createElement('p')
        p.innerText = `You won! ${humanChoice} beats ${computerChoice}\n\nScore:\n Computer: ${compScore}\nUser: ${userScore}`
        outcomeDiv.appendChild(p)
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        userScore += 1
        const p = document.createElement('p')
        p.innerText = `You won! ${humanChoice} beats ${computerChoice}\n\nScore:\n Computer: ${compScore}\nUser: ${userScore}`
        outcomeDiv.appendChild(p)
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        userScore += 1
        const p = document.createElement('p')
        p.innerText = `You won! ${humanChoice} beats ${computerChoice}\n\nScore:\n Computer: ${compScore}\nUser: ${userScore}`
        outcomeDiv.appendChild(p)
    }
    else {
        compScore +=1
        const p = document.createElement('p')
        p.innerText = `Computer Won.... ${computerChoice} beats ${humanChoice}\n\nScore:\n Computer: ${compScore}\nUser: ${userScore}`
        outcomeDiv.appendChild(p)
    }

    // first one to reach 5 is declared the winner
    if (compScore === 5) {
    const p = document.createElement('p')
    p.innerText = `Computer Wins the Game.... ${compScore} to ${userScore}`
    outcomeDiv.appendChild(p)
}
else if (userScore === 5) {
    const p = document.createElement('p')
    p.innerText = `You Won the Game.... ${userScore} to ${compScore}`
    outcomeDiv.appendChild(p)
}
}




// listens for rock button click from user and plays game with that seleciton //
rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'rock';
    playGame(humanChoice, computerChoice)
})
// listens for paper button click from user and plays game with that seleciton //
paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'paper';
    playGame(humanChoice, computerChoice)
})
// listens for scissors button click from user and plays game with that seleciton //
scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'scissors';
    playGame(humanChoice, computerChoice)
})
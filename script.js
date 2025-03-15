let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        playerChoice = e.currentTarget.className;
        computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice)
    })
})

const playerScoreDisplay = document.querySelector(".score-container.player p:nth-child(2)")
const computerScoreDisplay = document.querySelector(".score-container.computer p:nth-child(2)")

const roundResult = document.querySelector(".round-result");

function playRound(playerChoice, computerChoice) {
    roundResult.style.color = "black";
    if (playerChoice === computerChoice){
        roundResult.textContent = `It's a tie! You both chose ${playerChoice}.`;
    }else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        roundResult.textContent = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
        playerScore++;
    }else {
        roundResult.textContent = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
        computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        console.info(`It's a tie! You both chose ${playerChoice}.`);
    }else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        console.info(`You win! You chose ${playerChoice} and the computer chose ${computerChoice}.`);
        playerScore++;
    }else {
        console.info(`You lose! You chose ${playerChoice} and the computer chose ${computerChoice}.`);
        computerScore++;
    }
}
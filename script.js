function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}

function getPlayerChoice(){
    const playerChoice = (prompt("Rock, paper or scissors?") ?? "").toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }else{
        console.error("That isn't an option! Try again");
        return getPlayerChoice();
    }
}

let playerScore = 0;
let computerScore = 0;
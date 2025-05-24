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

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerChoice, computerChoice){
        if (playerChoice === computerChoice){
            console.log(`It's a tie! You both chose ${playerChoice}`);
        }else if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
            console.log(`You win! You chose ${playerChoice} and the computer chose ${computerChoice}`);
            playerScore++;
        }else{
            console.log(`You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`);
            computerScore++;
        }
    }
}
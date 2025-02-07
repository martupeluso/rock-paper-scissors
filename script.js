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

function getPlayerChoice() {
    let playerChoice = (prompt("Rock, paper or scissors?") ?? "").toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }else{
        console.log("That's not an option! Try again")
        return getPlayerChoice();
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    let roundsPlayed = 0;

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice){
            console.log(`It's a tie! You both chose ${playerChoice}.`);
        }else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
            console.log(`You win! You chose ${playerChoice} and the computer chose ${computerChoice}.`);
            playerScore++;
        }else {
            console.log(`You lose! You chose ${playerChoice} and the computer chose ${computerChoice}.`);
            computerScore++;
        }
        roundsPlayed++;
    }

    while (roundsPlayed < 5) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);
    }

    if (roundsPlayed === 5){
        console.info(`Game is over! Player: ${playerScore} - Computer: ${computerScore}`)

        if(playerScore === computerScore){
            console.info("It's a tie!");
        }else {
            console.info(playerScore > computerScore ? "You won!" : "You lost!");
        }
    }
}

playGame();
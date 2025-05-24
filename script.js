function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS"
    }
}

function getPlayerChoice(){
    const playerChoice = (prompt("Rock, paper or scissors?") ?? "").toUpperCase();

    if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS"){
        return playerChoice;
    }else{
        console.error("That isn't an option! Try again");
        return getPlayerChoice();
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    let roundsPlayed = 0;

    function playRound(playerChoice, computerChoice){
        if (playerChoice === computerChoice){
            console.log(`%cIt's a tie! You both chose ${playerChoice} 🤝`, "color: blue");
        }else if(playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "PAPER" && computerChoice === "ROCK" || playerChoice === "SCISSORS" && computerChoice === "PAPER"){
            console.log(`%cYou win! You chose ${playerChoice} and the computer chose ${computerChoice} 🎉`, "color: green");
            playerScore++;
        }else{
            console.log(`%cYou lose! You chose ${playerChoice} and the computer chose ${computerChoice} 😞`, "color: darkred");
            computerScore++;
        }
        roundsPlayed++;
    }
    
    while (roundsPlayed < 5) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);
    }

    if (roundsPlayed === 5) {
        console.log(`Game's over! Player: ${playerScore} - Computer: ${computerScore}`);
        if (playerScore === computerScore){
            console.log("It's a tie!");
        }else if (playerScore > computerScore){
            console.log("Player wins! 🏆");
        }else{
            console.log("Computer wins! 💻");
        }
    }
}

playGame();
let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

let currentRound = 0;

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
    currentRound++;
    
    if (playerChoice === computerChoice){
        roundResult.textContent = `Round ${currentRound} — It's a tie! You both chose ${playerChoice}.`;
    }else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        roundResult.textContent = `Round ${currentRound} — You win! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
        playerScore++;
    }else {
        roundResult.textContent = `Round ${currentRound} — You lose! You chose ${playerChoice} and the computer chose ${computerChoice}.`;
        computerScore++;
    }
    
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5){
        buttons.forEach(button => {
            button.disabled = true;
            button.style.opacity = 0.33;
        });
        displayFinalResult();
    };
}

function displayFinalResult() {
    const div = document.createElement("div");
    div.className = "final-result";

    const p = document.createElement("p");
    p.textContent = playerScore === 5 ? "Player wins!" : "Computer wins!"

    const button = document.createElement("button");
    button.textContent = "Play again";

    button.addEventListener("click", () => {
        currentRound = 0;

        playerScore = 0;
        computerScore = 0;

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        roundResult.textContent = "Waiting for your choice..."
        roundResult.style.color = "grey"

        buttons.forEach(button => {
            button.disabled = false;
            button.style.opacity = 1;
        });

        div.remove();
    })

    div.append(p, button);

    roundResult.after(div);
}
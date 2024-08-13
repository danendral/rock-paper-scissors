// function to get computer choice randomly
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomInt === 0) {
        computerChoice = "ROCK";
    } else if (randomInt === 1) {
        computerChoice = "PAPER"; 
    } else {
        computerChoice = "SCISSOR";
    }
    return computerChoice;
}

// function to get human choice, ensure it is a valid choice
function getHumanChoice() {
    let humanChoice;
    while (!((humanChoice === "ROCK") || (humanChoice === "PAPER") || (humanChoice === "SCISSOR"))) {
        humanChoice = prompt("Choose between rock, paper, and scissor").toUpperCase();
    }
    return humanChoice;
}

// function to play 1 round, take parameters human and computer choice
// assess the winner and update score
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            computerScore += 1;
        }
        else if (computerChoice === "SCISSOR") {
            humanScore += 1;
        }
    }
    else if (humanChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            humanScore += 1;
        }
        else if(computerChoice === "SCISSOR") {
            computerScore += 1;
        }
    }
    else {
        if (computerChoice === "ROCK") {
            computerScore += 1;
        }
        else if (computerChoice === "PAPER") {
            humanScore += 1;
        }
    }
    console.log("");
    console.log("Human Choice:", humanChoice);
    console.log("Computer Choice:", computerChoice);
    domHumanChoice.textContent = "Human Seleceted: " + humanChoice;
    domComputerChoice.textContent = "Computer Selected: " + computerChoice;
    chosenItem.appendChild(domHumanChoice);
    chosenItem.appendChild(domComputerChoice);

    domHumanScore.textContent = humanScore;
    domComputerScore.textContent = computerScore;
}


// Initialise human and compute scores
let humanScore = 0;
let computerScore = 0; 


// Get human and computer score
const domHumanScore = document.querySelector("#humanScore");
const domComputerScore = document.querySelector("#computerScore");

const body = document.querySelector("body");
const winner = document.createElement("div");

const chosenItem = document.querySelector(".chosenItem");
const domHumanChoice = document.createElement("div");
const domComputerChoice = document.createElement("div");


// Add event listener to the buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
rockButton.addEventListener("click", () => {
    const humanSelection = "ROCK";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playGame();
});
paperButton.addEventListener("click", () => {
    const humanSelection = "PAPER";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playGame();
});
scissorButton.addEventListener("click", () => {
    const humanSelection = "SCISSOR";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playGame();
});


// function playgame, play 5 rounds
function playGame() {
    if (humanScore === 5){
        winner.textContent = "Human Win!";
        body.appendChild(winner);
    } else if (computerScore === 5) {
        console.log("Computer Win!")
        winner.textContent = "Human Win!";
        body.appendChild(winner);
    }
}
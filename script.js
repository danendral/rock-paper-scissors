console.log("Hello World!")

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
            humanChoice += 1;
        }
    }
}

// initialise human and compute scores
let humanScore = 0;
let computerScore = 0; 

// function playgame, play 5 rounds
function playGame() {
    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);    
    }

    console.log("Final Score:");
    console.log("Computer Score", computerScore);
    console.log("Human Score", humanScore);

}

playGame();
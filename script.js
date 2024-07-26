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
        console.log(humanChoice);
    }
    return humanChoice;
}

// declare human and compute scores

// function playround to play 1 round, take parameters human and computer choice
// assess the winner
// update the score


// function playgame, play 5 rounds
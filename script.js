console.log("Hello World!")

// function to get computer choice randomly
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomInt === 0) {
        computerChoice = "Rock";
    } else if (randomInt === 1) {
        computerChoice = "Paper"; 
    } else {
        computerChoice = "Scissor";
    }
    console.log(computerChoice);
}
getComputerChoice();

// function to get human choice, ensure it is a valid choice

// declare human and compute scores

// function playround to play 1 round, take parameters human and computer choice
// assess the winner
// update the score


// function playgame, play 5 rounds
// Create string variable "computerChoice" and set value to ""
let computerChoice = "";

// Create function "getComputerChoice()" that randomly generates a 
// a choice of rock, paper, or scissors and returns said value
function getComputerChoice() {
    // Create int variable "randNum" and set value to a random
    // number between 0 and 2 
    // Note: redeclaring the variable works in this scope
    let randNum = Math.floor(Math.random() * 3);
    console.log(randNum)

    // If the the value generated from randNum equals 0
    // set computerChoice to "rock"
    if (randNum === 0) {
        computerChoice = "rock";
    // Otherwise, if randNum is 1, set computerChoice to "paper"
    } else if (randNum === 1) {
        computerChoice = "paper";
    // Otherwise, if randNum is 2, set computerChoice to "scissors"
    } else if (randNum === 2) {
        computerChoice = "scissors"
    }

    // return the computerChoice variable
    return computerChoice;
}

// Testing functionality
getComputerChoice();
console.log(computerChoice);
getComputerChoice();
console.log(computerChoice);
getComputerChoice();
console.log(computerChoice);




// Create string variable "computerChoice" and set value to ""
let computerChoice = "";
// Create string variable "humanChoice" and set value to ""
let humanChoice = "";
// Create int variable "computerScore" and set value to 0
let computerScore = 0;
// Create int variable "humanScore" and set value to 0
let humanScore = 0;

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

// Create boolean variable "keepGoing" and set value to true
let keepGoing = true;
// Create function "getHumanChoice()" that prompts the user to
// choose rock, paper, or scissors
function getHumanChoice() {
    // Loop until keepGoing is false
    while (keepGoing) {
        // Ask the user "Rock, paper, or scissors?" and set the user's
        // input to humanChoice
        humanChoice = prompt("Rock, paper, or scissors?", "");
        // Set humanChoice to lowercase
        humanChoice = humanChoice.toLowerCase();

        // If humanChoice equals "rock", "paper", or "scissors"
        // set keepGoing to false and return humanChoice
        if (humanChoice === "rock" 
            || humanChoice === "paper"
            || humanChoice === "scissors") {
                keepGoing === false;
                return humanChoice;
        // Otherwise, if humanChoice is a number tell user "You
        // entered a number, please type rock, paper, or scissors"
        // Note: isNaN checks if the argument is a number then
        // the ! operator negates the value from isNaN
        } else if (!isNaN(humanChoice)) {
            console.log("You entered a number, please type rock, paper, or scissors");
        // Otherwise, tell user "You entered an invalid option,
        // please type rock, paper, or scissors"
        } else {
            console.log("You entered an invalid option, please type rock, paper, or scissors");
        }
    }
}

// Testing functionality
getHumanChoice();
console.log(humanChoice);



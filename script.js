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

// Create string constant "humanSelection" and set value to
// returned value from getHumanChoice()
const humanSelection = getHumanChoice();
// Create string constant "computerSelection" and set value to
// returned value from getComputerChoice()
const computerSelection = getComputerChoice();

// Create function "playRound" that takes humanChoice and computerChoice
// as arguments and plays a single round
function playRound(humanChoice, computerChoice) {
    // If humanChoice equals computerChoice tell user "Tie! You and
    // the computer both chose <>.
    if (humanChoice === computerChoice) {
        console.log("Tie! You and the computer both chose " + humanChoice + ".");
    // Otherwise, if humanChoice beats computerChoice, tell user "You win!
    // <humanChoice> beats <computerChoice>" and increment humanScore by one
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
    // Otherwise, if computerChoice beat humanChoice, tell user "You lose!
    // <computerChoice> beats <humanChoice>" and increment computerScore by one
    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
    }
}

// Testing functionality
 playRound(humanSelection, computerSelection);



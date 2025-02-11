// Create function "getComputerChoice()" that randomly generates a 
// a choice of rock, paper, or scissors and returns said value
function getComputerChoice() {
    // Create string variable "computerChoice" and set value to ""
    let computerChoice = "";
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

// Create function "getHumanChoice()" that prompts the user to
// choose rock, paper, or scissors
function getHumanChoice() {
    // Create string variable "humanChoice" and set value to ""
    let humanChoice = "";
    // Create boolean variable "keepGoing" and set value to true
    let keepGoing = true;
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
                keepGoing = false;
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

// Create function "playGame" that calls playRound to play 5 rounds,
// keeps score, and declares a winner at the end
function playGame() {

    // Create int variable "computerScore" and set value to 0
    let computerScore = 0;
    // Create int variable "humanScore" and set value to 0
    let humanScore = 0;

    // Create string variable "humanSelection" and set value to
    // returned value from getHumanChoice()
    let humanSelection = "";
    // Create string variable "computerSelection" and set value to
    // returned value from getComputerChoice()
    let computerSelection = "";

    // Loop playRound 5 times
    for (let roundCount = 0; roundCount < 5; roundCount++) {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection)
        }
        
        // Call displayResult()
        displayResult();

    // Create function "playRound" that takes humanChoice and computerChoice
    // as arguments and plays a single round
    function playRound(humanChoice, computerChoice) {

        // If humanChoice equals computerChoice tell user "Tie! You and
        // the computer both chose <>.
        if (humanChoice === computerChoice) {
            console.log("Tie round! You and the computer both chose " + humanChoice + ".");
        // Otherwise, if humanChoice beats computerChoice, tell user "You win!
        // <humanChoice> beats <computerChoice>" and increment humanScore by one
        } else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".");
                humanScore++;
        // Otherwise, if computerChoice beat humanChoice, tell user "You lose!
        // <computerChoice> beats <humanChoice>" and increment computerScore by one
        } else if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock") {
                console.log("You lose this round! " + computerChoice + " beats " + humanChoice + ".");
                computerScore++;
        }
    }

    // Create function displayResult() that determines the winner
    // and displays the final score
    function displayResult() {
        // Create space in console
        console.log("");

        // If humanScore equals computerScore tell user "Tie game!"
        // and display scores
        if (humanScore === computerScore) {
            console.log("Tie game!")
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore)
        // Otherwise, if humanScore is greater than computerScore tell
        // user "You win the game!" and display scores
        } else if (humanScore > computerScore) {
            console.log("You win the game!")
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore)
        // Otherwise, tell user "You lose the game!" and display
        // scores
        } else {
            console.log("You lose the game!")
            console.log("Your score: " + humanScore)
            console.log("Computer score: " + computerScore)
        }
    }
}

// Testing functionality
playGame();


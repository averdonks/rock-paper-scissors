const buttons = document.querySelectorAll("button");
const gameText = document.querySelector("#gameText")
const humanScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const gameElements = document.querySelector(".gameElements");
const gameContainer = document.querySelector("#gameContainer");

// Add click event for each button to play a round
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase());
    });
});

// Create function "playRound" that takes humanChoice and computerChoice
// as arguments and plays a single round
function playRound(humanChoice) {

    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        gameText.innerHTML = "Tie round! You and the computer both chose " + `<b style="padding: 0 0 0 4px">${humanChoice}</b>` + ".";
    // <humanChoice> beats <computerChoice>" and increment humanScore by one
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
            gameText.innerHTML = "You win this round! " + " " +
            `<span style="padding: 0 4px; text-decoration: underline solid red 0.2em; text-underline-position: under;">
            ${humanChoice}</span>` +" beats " +
            `<span style="padding: 0 0 0 4px; text-decoration: underline dashed blue 0.2em; text-underline-position: under;">
            ${computerChoice}</span>` + "."; 
            if (humanScore.textContent === "0") {
                humanScore.textContent = 1;
            } else {
                humanScore.textContent++;
            }
            
    // <computerChoice> beats <humanChoice>" and increment computerScore by one
    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock") {
            gameText.innerHTML= "You lose this round! " +
            `<span style="padding: 0 4px; text-decoration: underline dashed blue 0.2em; text-underline-position: under;">
            ${computerChoice}</span>` + " beats " +
            `<span style="padding: 0 0 0 4px; text-decoration: underline solid red 0.2em; text-underline-position: under;">
            ${humanChoice}</span>` + ".";
            if (computerScore.textContent === "0") {
                computerScore.textContent = 1;
            } else {
                computerScore.textContent++;
            }
        }

    if (humanScore.textContent == 5 || computerScore.textContent == 5) {
        displayResult(humanScore.textContent, computerScore.textContent);
    }

}

// Create function displayResult() that determines the winner
// and displays the final score
function displayResult(humanScore, computerScore) {
    if (humanScore > computerScore) {
        // Remove game elements and display winner
        gameElements.style.display = "none";
        const win = document.createElement("div");
        win.textContent = "YOU WIN!";
        win.classList.add("win");
        gameContainer.appendChild(win);

        const finalScore = document.createElement("div");
        finalScore.setAttribute("style", "font-size: 0.5em")
        finalScore.innerHTML = `<span style="border-bottom: red solid 0.2em"> Your score: ${humanScore}</span>` + `<br></br>` +
        `<span style="border-bottom: blue dashed 0.2em"> Computer score: ${computerScore}</span>`;

        win.appendChild(finalScore);
    } else {
          // Remove game elements and display winner
          gameElements.style.display = "none";
          const lose = document.createElement("div");
          lose.textContent = "YOU LOSE!";
          lose.classList.add("lose");
          gameContainer.appendChild(lose);
  
          const finalScore = document.createElement("div");
          finalScore.setAttribute("style", "font-size: 0.5em")
          finalScore.innerHTML = `<span style="border-bottom: red solid 0.2em"> Your score: ${humanScore}</span>` + `<br></br>` +
          `<span style="border-bottom: blue dashed 0.2em"> Computer score: ${computerScore}</span>`;
  
          lose.appendChild(finalScore);
    }
}

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

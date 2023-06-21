const choices = ["rock", "paper", "scissors"];
const randomInt = Math.floor(Math.random() * 3);
function getComputerChoice() {
  return choices[randomInt];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    prompt("Enter your choice (rock, paper, or scissors)");
  }

  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
game();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);
  return choices[randomInt];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  return "You Lose! Paper beats Rock";
}

function game() {}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

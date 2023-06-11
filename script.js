function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);
  return choices[randomInt];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  return (
    "You Lose! Paper beats Rock",
    "You win Rock beats Scissors",
    "You lose! Scissors beat Paper"
  );
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

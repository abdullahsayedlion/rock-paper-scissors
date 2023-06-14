const choices = ["rock", "paper", "scissors"];
const randomInt = Math.floor(Math.random() * 3);
function getComputerChoice() {
  return choices[randomInt];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  if (choices["rock"] === playerSelection) {
    return "It's a draw!";
  } else if (choices["paper"] !== playerSelection) {
    return "You lose";
  } else if (choices["scissors"] !== playerSelection) {
    return "you win";
  }
  playerSelection.toLowerCase === "rock";
  return computerSelection;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

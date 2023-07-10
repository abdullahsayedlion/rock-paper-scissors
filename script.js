let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
//console.log(getComputerChoice());

function playRound() {
  const playerChoice = prompt("Enter your choice").toLowerCase();
  const computerChoice = getComputerChoice();
  // draw
  if (playerChoice === computerChoice) {
    console.log("It's a draw!");
  }
  // player wins
  else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win");
    playerScore++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("You Win");
    playerScore++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win");
    playerScore++;
    // computers
  } else {
    console.log("You Lose");
    computerScore++;
  }
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log(
    `Player Wins ${playerScore} times and Computer Wins ${computerScore} times`
  );
}

game();

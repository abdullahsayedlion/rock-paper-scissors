// get computer's choice
// get the player's choice
// determine result
//   cChoice==pChoice => draw
//   pChoice=='Rock' and cChoice=='Scissors' => p wins
//   pChoice=='Scissors' and cChoice=='paper' => p wins
//   pChoice=='paper' and cChoice=='rock' => p wins
//   otherwise c has won
// report the winner
// increment the winner score
// play the game five times
// report the result

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);
  return choices[randomInt];
}

//console.log(getComputerChoice());

function getPlayerChoice() {
  return prompt("Enter your choice(rock, paper, scissors");
}

//console.log(getPlayerChoice())

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerSelection = getComputerChoice();
  if (playerChoice === computerSelection) {
    return "It's a draw";
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win";
  } else if (playerChoice === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win";
  } else if (playerChoice === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win";
  } else {
    computerScore++;
    return "You lose";
  }
}

function game() {
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(`Player wins ${playerScore} times`);
  console.log(`Computer wins ${computerScore} times`);
}

game();

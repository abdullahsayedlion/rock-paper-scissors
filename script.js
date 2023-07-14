let firstPlayerName;
let secondPlayerName;
let drawScore = 0;
let firstPlayerScore = 0;
let secondPlayerScore = 0;

function getPlayerName(message) {
  return prompt(message);
}

function getPlayerChoice(message) {
  return prompt(message);
}

function playRound() {
  const firstPlayerChoice = getPlayerChoice(
    "Player: " +
      firstPlayerName +
      " Enter your choice: 1 for rock, 2 for paper, 3 for scissors"
  );
  const secondPlayerChoice = getPlayerChoice(
    "Player: " +
      secondPlayerName +
      " Enter your choice: 1 for rock, 2 for paper, 3 for scissors"
  );

  //get and save the result

  if (firstPlayerChoice === secondPlayerChoice) {
    drawScore++;
    return "It's a draw";
  } else if (firstPlayerChoice === "1" && secondPlayerChoice === "2") {
    firstPlayerScore++;
    return "firstPlayer wins";
  } else if (firstPlayerChoice === "2" && secondPlayerChoice === "1") {
    firstPlayerScore++;
    return "firstPlayer wins";
  } else if (firstPlayerChoice === "1" && secondPlayerChoice === "3") {
    firstPlayerScore++;
    return "firstPlayer wins";
  } else if (firstPlayerChoice === "3" && secondPlayerChoice === "2") {
    firstPlayerScore++;
    return "firstPlayer wins";
  } else {
    secondPlayerScore++;
    return "secondPlayer wins";
  }

  //report the result of current round
}

function gameLoop() {
  firstPlayerName = getPlayerName("Enter the first player's name");
  secondPlayerName = getPlayerName("Enter the second player's name");
  while (true) {
    playRound();
    const nextRound = prompt("Enter exit to stop playing: ");
    if (nextRound === "exit") break;
  }

  //report the result of the game
  console.log(
    `firstPlayerName wins ${firstPlayerScore} times + secondPlayerName wins ${secondPlayerScore} times`
  );
}

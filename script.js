document.addEventListener("DOMContentLoaded", () => {
  const playerOneInput = document.querySelector(".row.player-one input");
  const playerOneNextButton = document.querySelector(".row.player-one .next");
  const playerTwoInput = document.querySelector(".row.player-two input");
  const playerTwoNextButton = document.querySelector(".row.player-two .next");
  const playerOneBoard = document.querySelector(".row.game-board .player-one");
  const playerTwoBoard = document.querySelector(".row.game-board .player-two");
  const resetButton = document.querySelector(".reset.button");
  const validMessagePlayerOne = document.querySelector(
    ".row.player-one .valid-message "
  );
  const invalidMessagePlayerOne = document.querySelector(
    ".row.player-one .invalid-message "
  );

  const validMessagePlayerTwo = document.querySelector(
    ".row.player-two .valid-message"
  );
  const invalidMessagePlayerTwo = document.querySelector(
    ".row.player-two .invalid-message"
  );
  const playerOneOriginalPlaceholder = playerOneInput.placeholder;
  const playerTwoOriginalPlaceholder = playerTwoInput.placeholder;
  const gameButtons = document.querySelectorAll(".game-button");
  let playerOneSelectedButton = null;
  let playerTwoSelectedButton = null;
  let playerOneScore = 0;
  let playerTwoScore = 0;

  function enableButtons(buttons) {
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  function disableButtons(buttons) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  function determineWinner(playerOneChoice, playerTwoChoice) {
    if (
      (playerOneChoice === "rock" && playerTwoChoice === "scissors") ||
      (playerOneChoice === "scissors" && playerTwoChoice === "paper") ||
      (playerOneChoice === "paper" && playerTwoChoice === "rock")
    ) {
      return "playerOne";
    } else if (playerOneChoice === playerTwoChoice) {
      return "tie";
    } else {
      return "playerTwo";
    }
  }

  function updateScores() {
    const playerOneScoreElement = document.querySelector(
      ".board.player-one .score"
    );
    const playerTwoScoreElement = document.querySelector(
      ".board.player-two .score"
    );

    playerOneScoreElement.textContent = `Score: ${playerOneScore}`;
    playerTwoScoreElement.textContent = `Score: ${playerTwoScore}`;
  }

  gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (playerOneBoard.classList.contains("faded")) {
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.style.borderColor = "green";
        if (playerTwoSelectedButton !== button) {
          if (playerTwoSelectedButton) {
            playerTwoSelectedButton.style.backgroundColor = "";
            playerTwoSelectedButton.style.color = "";
            playerTwoSelectedButton.style.borderColor = "";
          }
          button.style.backgroundColor = "green";
          button.style.color = "white";
          button.style.borderColor = "green";
          playerTwoSelectedButton = button;
        } else {
          button.style.backgroundColor = "";
          button.style.color = "";
          button.style.borderColor = "";
          playerTwoSelectedButton = null;
        }
      } else {
        if (playerOneSelectedButton !== button) {
          if (playerOneSelectedButton) {
            playerOneSelectedButton.style.backgroundColor = "";
            playerOneSelectedButton.style.color = "";
            playerOneSelectedButton.style.borderColor = "";
          }
          button.style.backgroundColor = "green";
          button.style.color = "white";
          button.style.borderColor = "green";
          playerOneSelectedButton = button;
        } else {
          button.style.backgroundColor = "";
          button.style.color = "";
          button.style.borderColor = "";
          playerOneSelectedButton = null;
        }
      }
      const playerOneChoice = playerOneSelectedButton?.classList[1];
      const playerTwoChoice = playerTwoSelectedButton?.classList[1];

      if (playerOneChoice && playerTwoChoice) {
        const result = determineWinner(playerOneChoice, playerTwoChoice);

        if (result === "playerOne") {
          playerOneScore++;
        } else if (result === "playerTwo") {
          playerTwoScore++;
        }

        updateScores();
      }
      playerOneBoard.classList.toggle("clear");
      playerOneBoard.classList.toggle("faded");
      playerTwoBoard.classList.toggle("faded");
      playerTwoBoard.classList.toggle("clear");
    });
  });

  playerOneNextButton.disabled = true;
  playerOneNextButton.style.opacity = "0.5";

  playerTwoNextButton.disabled = true;
  playerTwoNextButton.style.opacity = "0.5";

  playerOneInput.addEventListener("input", () => {
    if (playerOneInput.value.length >= 5) {
      validMessagePlayerOne.style.display = "block";
      invalidMessagePlayerOne.style.display = "none";
      playerOneNextButton.style.display = "block";
      playerOneNextButton.removeAttribute("disabled");
      playerOneNextButton.disabled = false;
      playerOneNextButton.style.opacity = "1";
    } else {
      validMessagePlayerOne.style.display = "none";
      invalidMessagePlayerOne.style.display = "block";
      playerOneNextButton.style.display = "block";
      playerOneNextButton.setAttribute("disabled", "true");
      playerOneNextButton.style.disabled = true;
      playerOneNextButton.style.opacity = "0.5";
    }
  });

  playerTwoInput.addEventListener("input", () => {
    if (playerTwoInput.value.length >= 5) {
      validMessagePlayerTwo.style.display = "block";
      invalidMessagePlayerTwo.style.display = "none";
      playerTwoNextButton.style.display = "block";
      playerTwoNextButton.removeAttribute("disabled");
      playerTwoNextButton.disabled = false;
      playerTwoNextButton.style.opacity = "1";
    } else {
      validMessagePlayerTwo.style.display = "none";
      invalidMessagePlayerTwo.style.display = "block";
      playerTwoNextButton.style.display = "block";
      playerTwoNextButton.setAttribute("disabled", "true");
      playerTwoNextButton.style.disabled = true;
      playerTwoNextButton.style.opacity = "0.5";
    }
  });

  playerOneInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && playerOneInput.value.length >= 5) {
      playerOneInput.style.display = "none";
      playerOneNextButton.style.display = "none";
      playerTwoInput.style.display = "block";
      playerTwoNextButton.style.display = "block";
      validMessagePlayerOne.style.display = "none";
      playerTwoInput.focus();
      const playerOneNameElement = document.querySelector(
        ".board.player-one .name"
      );
      playerOneNameElement.textContent = playerOneInput.value;
    }
  });

  playerOneNextButton.addEventListener("click", () => {
    if (playerOneInput.value.trim() !== "") {
      playerOneInput.style.display = "none";
      playerOneNextButton.style.display = "none";
      playerTwoInput.style.display = "block";
      playerTwoNextButton.style.display = "block";
      validMessagePlayerOne.style.display = "none";
      invalidMessagePlayerOne.style.display = "none";
      const playerOneNameElement = document.querySelector(
        ".board.player-one .name"
      );
      playerOneNameElement.textContent = playerOneInput.value;

      playerOneBoard.classList.add("faded");
      playerTwoBoard.classList.remove("faded");
      disableButtons(playerOneBoard.querySelectorAll(".game-button"));
      enableButtons(playerTwoBoard);
    }
  });

  playerTwoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && playerTwoInput.value.length >= 5) {
      playerTwoInput.style.display = "none";
      playerTwoNextButton.style.display = "none";
      playerOneBoard.style.display = "block";
      playerTwoBoard.style.display = "block";
      resetButton.style.display = "block";
      validMessagePlayerTwo.style.display = "none";
      const playerTwoNameElement = document.querySelector(
        ".board.player-two .name"
      );
      playerTwoNameElement.textContent = playerTwoInput.value;
    }
  });

  playerTwoNextButton.addEventListener("click", () => {
    if (playerTwoInput.value.trim() !== "") {
      playerTwoInput.style.display = "none";
      playerTwoNextButton.style.display = "none";
      playerOneBoard.style.display = "block";
      playerTwoBoard.style.display = "block";
      resetButton.style.display = "block";
      validMessagePlayerTwo.style.display = "none";
      invalidMessagePlayerTwo.style.display = "none";
      const playerTwoNameElement = document.querySelector(
        ".board.player-two .name"
      );
      playerTwoNameElement.textContent = playerTwoInput.value;
      playerTwoBoard.classList.add("faded");
      playerOneBoard.classList.remove("faded");
      disableButtons(playerTwoBoard.querySelectorAll(".game-button"));
      enableButtons(playerOneBoard);
    }
  });

  resetButton.addEventListener("click", () => {
    if (playerOneSelectedButton) {
      playerOneSelectedButton.style.backgroundColor = "";
      playerOneSelectedButton.style.color = "";
      playerOneSelectedButton.style.borderColor = "";
      playerOneSelectedButton = null;
    }

    if (playerTwoSelectedButton) {
      playerTwoSelectedButton.style.backgroundColor = "";
      playerTwoSelectedButton.style.color = "";
      playerTwoSelectedButton.style.borderColor = "";
      playerTwoSelectedButton = null;
    }

    playerOneInput.style.display = "block";
    playerOneNextButton.style.display = "block";
    playerTwoInput.style.display = "none";
    playerTwoNextButton.style.display = "none";
    playerOneBoard.style.display = "none";
    playerTwoBoard.style.display = "none";
    resetButton.style.display = "none";
    playerOneInput.value = "";
    playerTwoInput.value = "";
    playerOneInput.placeholder = playerOneOriginalPlaceholder;
    playerTwoInput.placeholder = playerTwoOriginalPlaceholder;
    playerOneNextButton.disabled = true;
    playerOneNextButton.style.opacity = "0.5";
    playerTwoNextButton.disabled = true;
    playerTwoNextButton.style.opacity = "0.5";
  });
});

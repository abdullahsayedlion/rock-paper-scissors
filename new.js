document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".next-button");
  const playerNameInputs = document.querySelectorAll(".player-input");
  const playerOneInputWrapper = document.querySelector(
    ".player-one-input-wrapper"
  );
  const playerTwoInputWrapper = document.querySelector(
    ".player-two-input-wrapper"
  );
  const playerBoards = document.querySelector(".playerBoards");
  const exitButton = document.querySelector(".exit-button");
  const gameButtons = document.querySelectorAll(".game-button");
  const firstBox = document.querySelector(".boxOne");
  const secondBox = document.querySelector(".boxTwo");
  const boxOne = document.querySelector(".boxOne");
  const boxTwo = document.querySelector(".boxTwo");
  const playerOneScoreElement = document.querySelector(".player-one-score");
  const playerTwoScoreElement = document.querySelector(".player-two-score");
  const playerOneNameElement = document.createElement("h2");
  const playerTwoNameElement = document.createElement("h2");

  let currentInputIndex = 0;
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let currentPlayer = 1;
  let playerOneSelection = "";
  let playerTwoSelection = "";

  togglePlayerBoxes();

  addPlayerNamesToBoard();

  nextButton.classList.add("disabled");
  playerNameInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const validMessage = input.parentElement.querySelector(".valid-message");
      const invalidMessage =
        input.parentElement.querySelector(".invalid-message");
      if (input.value.length < 5) {
        validMessage.classList.remove("active");
        invalidMessage.classList.add("active");
        invalidMessage.style.display = "block";
        nextButton.classList.add("disabled");
      } else {
        invalidMessage.style.display = "none";
        invalidMessage.classList.remove("active");
        validMessage.classList.add("active");
        nextButton.classList.remove("disabled");
      }
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && input.value.length >= 5) {
        event.preventDefault();
        if (currentInputIndex === 0) {
          currentInputIndex = 1;
          playerOneInputWrapper.style.display = "none";
          playerTwoInputWrapper.style.display = "flex";
          playerNameInputs[1].focus();
        } else if (currentInputIndex === 1) {
          playerTwoInputWrapper.style.display = "none";
          playerBoards.style.display = "block";
          nextButton.style.display = "none";
        }
      }
    });
  });

  playerNameInputs[0].addEventListener("keydown", (event) => {
    if (event.key === "Enter" && playerNameInputs[0].value.length >= 5) {
      event.preventDefault();
      currentInputIndex = 1;
      playerOneInputWrapper.style.display = "none";
      playerTwoInputWrapper.style.display = "flex";
      playerNameInputs[1].focus();
      nextButton.classList.add("disabled");
    }
  });

  playerNameInputs[1].addEventListener("keydown", (event) => {
    if (event.key === "Enter" && playerNameInputs[1].value.length >= 5) {
      event.preventDefault();
      playerTwoInputWrapper.style.display = "none";
      playerBoards.style.display = "block";
      nextButton.style.display = "none";
    }
    if (
      playerNameInputs[1].value === "" ||
      playerNameInputs[1].value.length < 5
    ) {
      nextButton.classList.add("disabled");
    }
  });

  nextButton.addEventListener("click", function () {
    document
      .querySelector(".player-one-input-wrapper")
      .classList.remove("active");
    document.querySelector(".player-two-input-wrapper").classList.add("active");
    if (currentInputIndex === 0) {
      currentInputIndex = 1;
      playerOneInputWrapper.style.display = "none";
      playerTwoInputWrapper.style.display = "flex";
      nextButton.classList.add("disabled");
    } else if (currentInputIndex === 1) {
      playerTwoInputWrapper.style.display = "none";
      playerBoards.style.display = "block";
      nextButton.style.display = "none";
    }
  });

  exitButton.addEventListener("click", () => location.reload());

  playerNameInputs[1].addEventListener("input", () => {
    const validMessage =
      playerNameInputs[1].parentElement.querySelector(".valid-message");
    if (playerNameInputs[1].value.length >= 5) {
      validMessage.style.display = "block";
    }
  });

  gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
      markButtonSelected(button);
      if (button.getAttribute("data-player") == 1) {
        currentPlayer = 2;
        togglePlayerBoxes();
        playerOneSelection = button.getAttribute("data-selection");
      } else {
        playerTwoSelection = button.getAttribute("data-selection");
        updateScores();
        resetButtonStyles(gameButtons);
        currentPlayer = 1;
        togglePlayerBoxes();
      }
    });
  });

  function markButtonSelected(button) {
    button.style.backgroundColor = "green";
    button.style.borderColor = "green";
    button.style.color = "white";
  }

  function togglePlayerBoxes() {
    if (currentPlayer === 1) {
      firstBox.style.opacity = 1;
      secondBox.style.opacity = 0.5;
      secondBox.classList.add("faded");
      firstBox.classList.remove("faded");
      disableButtons(
        Array.from(gameButtons).filter((button) =>
          button.getAttribute("data-player==2")
        )
      );
      enableButtons(
        Array.from(gameButtons).filter((button) =>
          button.getAttribute("data-player==1")
        )
      );
    } else {
      firstBox.style.opacity = 0.5;
      secondBox.style.opacity = 1;
      firstBox.classList.add("faded");
      secondBox.classList.remove("faded");
      disableButtons(
        Array.from(gameButtons).filter((button) =>
          button.getAttribute("data-player==1")
        )
      );
      enableButtons(
        Array.from(gameButtons).filter((button) =>
          button.getAttribute("data-player==2")
        )
      );
    }
  }

  function disableButtons(buttons) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  function enableButtons(buttons) {
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }

  function resetButtonStyles(buttons) {
    buttons.forEach((button) => {
      button.classList.remove("selected");
      button.style.backgroundColor = "";
      button.style.borderColor = "";
      button.style.color = "";
    });
  }

  function areAllButtonsClicked(buttons) {
    return Array.from(buttons).every((button) =>
      button.classList.contains("selected")
    );
  }

  function resetBoxes() {
    playerOneScore = 0;
    playerTwoScore = 0;
    firstBox.style.opacity = 1;
    secondBox.style.opacity = 1;
    resetButtonStyles(playerOneButtons);
    resetButtonStyles(playerTwoButtons);
  }

  function updateScores() {
    if (playerOneSelection === playerTwoSelection) {
      //Nothing should change
    } else if (
      (playerOneSelection === "rock" && playerTwoSelection === "scissors") ||
      (playerOneSelection === "paper" && playerTwoSelection === "rock") ||
      (playerOneSelection === "scissors" && playerTwoSelection === "paper")
    ) {
      playerOneScore++;
      playerOneScoreElement.textContent = `Score: ${playerOneScore}`;
    } else {
      playerTwoScore++;
      playerTwoScoreElement.textContent = `Score: ${playerTwoScore}`;
    }
  }

  function addPlayerNamesToBoard() {
    playerOneNameElement.className = "player-name";
    playerTwoNameElement.className = "player-name";
    boxOne.insertBefore(playerOneNameElement, boxOne.firstChild);
    boxTwo.insertBefore(playerTwoNameElement, boxTwo.firstChild);
    playerNameInputs[0].addEventListener("input", () => {
      playerOneNameElement.textContent = playerNameInputs[0].value;
    });

    playerNameInputs[1].addEventListener("input", () => {
      playerTwoNameElement.textContent = playerNameInputs[1].value;
    });
  }
});

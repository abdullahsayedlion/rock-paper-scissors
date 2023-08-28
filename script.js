let playerOneName = "";
let playerTwoName = "";
let playerOneScore = 0;
let playerTwoScore = 0;
let gameStarted = false;
let playerScoreElement;
let playerTwoScoreElement;
let playerOneSelection = "";
let playerTwoSelection = "";

initialPageState();

function initialPageState() {
  const root = document.createElement("div");
  root.classList.add("root");
  document.body.appendChild(root);
  root.style.display = "flex";
  root.style.flexDirection = "column";
  root.style.justifyContent = "center";
  root.style.alignItems = "center";
  root.style.margin = "50px";

  const inner = document.createElement("div");
  inner.classList.add("inner");
  document.body.appendChild(inner);
  root.appendChild(inner);
  inner.style.display = "flex";
  inner.style.flexDirection = "column";
  inner.style.alignItems = "center";
  inner.style.gap = "50px";
  inner.style.width = "100%";

  const row = document.createElement("div");
  row.classList.add("row");
  inner.appendChild(row);
  row.style.display = "flex";
  row.style.gap = "50px";
  row.style.justifyContent = "center";

  const inputOne = document.createElement("input");
  inputOne.classList.add("name-input-one");
  inputOne.setAttribute("placeholder", "Enter Your Name");
  inputOne.style.padding = "20px";
  inputOne.style.borderRadius = "5px";
  inputOne.style.backgroundColor = "blue";
  inputOne.style.borderColor = "blue";
  inputOne.style.fontSize = "20px";
  inputOne.style.boxShadow = "5px 5px 5px";
  row.appendChild(inputOne);

  const inputTwo = document.createElement("input");
  inputTwo.classList.add("name-input-two");
  inputTwo.setAttribute("placeholder", "Enter Your Name");
  inputTwo.style.padding = "20px";
  inputTwo.style.borderRadius = "5px";
  inputTwo.style.borderColor = "red";
  inputTwo.style.boxShadow = "5px 5px 5px";
  inputTwo.style.backgroundColor = "red";
  inputTwo.style.fontSize = "20px";
  row.appendChild(inputTwo);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("buttonWrapper");
  inner.appendChild(buttonWrapper);
  buttonWrapper.style.display = "flex";
  buttonWrapper.style.justifyContent = "center";

  const button = document.createElement("button");
  button.innerText = "Start Game";
  button.classList.add("name-button");
  button.style.color = "#fff";
  button.style.padding = "20px";
  button.style.borderRadius = "5px";
  button.style.fontSize = "20px";
  button.style.boxShadow = "5px 5px 5px";
  button.style.backgroundColor = "green";
  button.style.cursor = "pointer";
  buttonWrapper.appendChild(button);

  document.querySelector(".name-button").addEventListener("click", () => {
    playerOneName = document.querySelector(".name-input-one").value;
    playerTwoName = document.querySelector(".name-input-two").value;
    if (!gameStarted) {
      document.body.innerHTML = "";
      showSecondScreen();
    }
  });
}

function showSecondScreen() {
  const innerContainer = getInnerContainer();
  const boxOne = getBoxOne(innerContainer);
  boxOne.appendChild(getTitle(playerOneName));
  boxOne.appendChild(getPlayerBoard(playerOneName));

  const boxTwo = getBoxTwo(innerContainer);
  boxTwo.appendChild(getTitle(playerTwoName));
  boxTwo.appendChild(getPlayerBoard(playerTwoName));

  innerContainer.appendChild(boxOne);
  innerContainer.appendChild(boxTwo);

  const exitButtonContainer = document.createElement("div");
  exitButtonContainer.classList.add("exit-button-container");
  exitButtonContainer.style.display = "flex";
  exitButtonContainer.flexDirection = "column";
  exitButtonContainer.style.justifyContent = "center";
  exitButtonContainer.style.alignItems = "center";
  exitButtonContainer.style.marginTop = "20px";
  exitButtonContainer.style.position = "fixed";
  exitButtonContainer.style.bottom = "100px";
  exitButtonContainer.style.left = "45%";

  const exitButton = document.createElement("button");
  exitButton.innerText = "Exit Game";
  exitButton.classList.add("exit-button");
  exitButton.style.color = "#fff";
  exitButton.style.padding = "20px";
  exitButton.style.borderColor = "green";
  exitButton.style.borderRadius = "5px";
  exitButton.style.fontSize = "20px";
  exitButton.style.boxShadow = "5px 5px 5px";
  exitButton.style.backgroundColor = "green";
  exitButton.style.cursor = "pointer";
  exitButton.addEventListener("click", () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    document.body.innerHTML = "";
    initialPageState();
    gameStarted = false;
  });
  exitButtonContainer.appendChild(exitButton);
  innerContainer.appendChild(exitButtonContainer);
}

function getTitle(name) {
  const title = document.createElement("h2");
  title.innerHTML = name;
  title.style.color = "#fff";
  title.style.textAlign = "center";
  return title;
}

function getPlayerBoard() {
  const board = document.createElement("div");
  board.style.display = "flex";
  board.style.flexDirection = "column";
  board.style.gap = "20px";
  board.style.alignItems = "center";

  const playerContainer = document.createElement("div");
  playerContainer.classList.add("playerContainer");
  board.appendChild(playerContainer);

  playerScoreElement = document.createElement("h4");
  playerScoreElement.classList.add(`playerOneScore`);
  playerScoreElement.textContent = `Score: 0`;

  playerContainer.appendChild(playerScoreElement);

  playerTwoScoreElement = document.createElement("h4");
  playerTwoScoreElement.classList.add(`playerTwoScore`);
  playerTwoScoreElement.textContent = `Score:0`;
  playerContainer.appendChild(playerScoreElement);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  board.appendChild(buttonContainer);
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "10px";

  function updateScores(playerName, selectedButton) {
    const playerSelection = selectedButton.innerText;

    console.log("Updating scores...");
    console.log("Player One Selection:", playerOneSelection);
    console.log("Player Two Selection:", playerTwoSelection);

    if (
      (playerSelection === "Rock" && playerTwoSelection === "Scissors") ||
      (playerSelection === "Paper" && playerTwoSelection === "Rock") ||
      (playerSelection === "Scissors" && playerTwoSelection === "Paper")
    ) {
      console.log("Player 1 wins");
      if (playerName === playerOneName) {
        playerOneScore++;
        playerScoreElement.textContent = `Score: ${playerOneScore}`;
      } else if (playerName === playerTwoName) {
        playerTwoScore++;
        playerTwoScoreElement.textContent = `Score: ${playerTwoScore}`;
      }
    } else if (
      (playerTwoSelection === "Rock" && playerSelection === "Scissors") ||
      (playerTwoSelection === "Paper" && playerSelection === "Rock") ||
      (playerTwoSelection === "Scissors" && playerSelection === "Paper")
    ) {
      console.log("Player 2 wins");
      if (playerName === playerOneName) {
        playerTwoScore++;
        playerTwoScoreElement.textContent = `Score: ${playerTwoScore}`;
      } else if (playerName === playerTwoName) {
        playerOneScore++;
        playerScoreElement.textContent = `Score: ${playerOneScore}`;
      }
    }
  }

  function updateScoreElements() {
    playerScoreElement.textContent = `Score: ${playerOneScore}`;
    playerTwoScoreElement.textContent = `Score: ${playerTwoScore}`;
  }

  const buttonOne = document.createElement("button");
  buttonOne.innerText = "Rock";
  buttonOne.style.backgroundColor = "white";
  buttonOne.style.borderRadius = "5px";
  buttonOne.style.borderColor = "white";
  buttonOne.style.cursor = "pointer";
  buttonOne.style.padding = "20px";
  buttonOne.style.color = "black";
  buttonOne.style.fontSize = "16px";
  buttonOne.style.width = "100px";

  const buttonTwo = document.createElement("button");
  buttonTwo.innerText = "Paper";
  buttonTwo.style.backgroundColor = "white";
  buttonTwo.style.borderRadius = "5px";
  buttonTwo.style.borderColor = "white";
  buttonTwo.style.cursor = "pointer";
  buttonTwo.style.padding = "20px";
  buttonTwo.style.color = "black";
  buttonTwo.style.fontSize = "16px";
  buttonTwo.style.width = "100px";

  const buttonThree = document.createElement("button");
  buttonThree.innerText = "Scissors";
  buttonThree.style.backgroundColor = "white";
  buttonThree.style.borderColor = "white";
  buttonThree.style.borderRadius = "5px";
  buttonThree.style.cursor = "pointer";
  buttonThree.style.padding = "20px";
  buttonThree.style.color = "black";
  buttonThree.style.fontSize = "16px";
  buttonThree.style.width = "110px";

  let selectedButton = null;

  function clearSelection() {
    if (selectedButton) {
      selectedButton.style.backgroundColor = "white";
      selectedButton.style.color = "black";
      selectedButton.style.borderColor = "white";
    }
  }

  buttonOne.addEventListener("click", () => {
    console.log("Button One Clicked");
    clearSelection();
    buttonOne.style.backgroundColor = "green";
    buttonOne.style.color = "white";
    buttonOne.style.borderColor = "green";
    selectedButton = buttonOne;
    playerOneSelection = "Rock";
    updateScores("Rock", selectedButton);
  });

  buttonTwo.addEventListener("click", () => {
    console.log("Button Two (Paper) clicked");
    clearSelection();
    buttonTwo.style.backgroundColor = "green";
    buttonTwo.style.color = "white";
    buttonTwo.style.borderColor = "green";
    selectedButton = buttonTwo;
    playerTwoSelection = "Paper";
    updateScores("Paper", selectedButton);
  });

  buttonThree.addEventListener("click", () => {
    clearSelection();
    console.log("Button Three (Scissors) clicked");
    buttonThree.style.backgroundColor = "green";
    buttonThree.style.color = "white";
    buttonThree.style.borderColor = "green";
    selectedButton = buttonThree;
    playerTwoSelection = "Scissors";
    updateScores("Scissors", selectedButton);
  });

  buttonContainer.appendChild(buttonOne);
  buttonContainer.appendChild(buttonTwo);
  buttonContainer.appendChild(buttonThree);
  return board;
}

function getInnerContainer() {
  const innerContainer = document.createElement("div");
  document.body.appendChild(innerContainer);
  innerContainer.style.display = "flex";
  innerContainer.style.justifyContent = "center";
  innerContainer.style.alignItems = "center";
  innerContainer.style.gap = "60px";
  innerContainer.style.flexWrap = "wrap";
  innerContainer.style.height = "100vh";

  return innerContainer;
}

function getBoxOne(innerContainer) {
  const boxOne = document.createElement("div");
  boxOne.classList.add("box-one");
  innerContainer.appendChild(boxOne);
  boxOne.style.padding = "20px";

  boxOne.style.backgroundColor = "blue";
  boxOne.style.color = "white";
  boxOne.style.border = "1px solid";
  boxOne.style.borderRadius = "5px";

  return boxOne;
}

function getBoxTwo(innerContainer) {
  const boxTwo = document.createElement("div");
  innerContainer.appendChild(boxTwo);
  boxTwo.style.padding = "20px";

  boxTwo.style.backgroundColor = "red";
  boxTwo.style.color = "white";
  boxTwo.style.border = "1px solid";
  boxTwo.style.borderRadius = "5px";

  return boxTwo;
}

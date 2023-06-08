function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);
  return choices[randomInt];
}

console.log(getComputerChoice());

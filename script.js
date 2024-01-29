function getComputerChoice() {
  let die = Math.floor(Math.random() * 3) + 1;
  if (die === 1) {
    die = "rock";
  } else if (die === 2) {
    die = "paper";
  } else {
    die = "scissor";
  }
  return die;
}

function playerSelection() {
  p_choice = prompt("Rock, Paper or Scissor? ").toLowerCase();
  return p_choice;
}

computer_choice = getComputerChoice();
player_choice = playerSelection();

function winner() {
  if (
    (computer_choice === "rock" && player_choice === "paper") ||
    (computer_choice === "rock" && player_choice === "scissor") ||
    (computer_choice === "scissor" && player_choice === "paper") ||
    (computer_choice === "paper" && player_choice === "rock")
  ) {
    return "computer wins!";
  } else if (
    (computer_choice === "rock" && player_choice === "rock") ||
    (computer_choice === "paper" && player_choice === "paper") ||
    (computer_choice === "scissor" && player_choice === "scissor")
  )
    return "computer and player end with a tie!";
  else {
    return "player wins!";
  }
}

win = winner();

document.addEventListener("DOMContentLoaded", function () {
  let main_text = document.getElementById("main_text");
  main_text.textContent = `Computer = ${computer_choice} and Player = ${player_choice}, so, the ${win}`;
});

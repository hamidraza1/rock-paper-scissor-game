let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score");
const result_div = document.querySelector(".result > p");
const r_div = document.getElementById("r");
const p_div = document.getElementById("p");
const s_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    comp
  )}. You win!`;
  document.getElementById(user).parentElement.classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(user).parentElement.classList.remove("green-glow");
  }, 300);
}

function lose(user, comp) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(comp)} beats ${convertToWord(
    user
  )}. You Lose!`;
  document.getElementById(user).parentElement.classList.add("red-glow");
  setTimeout(() => {
    document.getElementById(user).parentElement.classList.remove("red-glow");
  }, 300);
}

function draw(user, comp) {
  result_div.innerHTML = `${convertToWord(comp)} and ${convertToWord(
    user
  )}. Its Draw!`;
  document.getElementById(user).parentElement.classList.add("grey-glow");
  setTimeout(() => {
    document.getElementById(user).parentElement.classList.remove("grey-glow");
  }, 300);
}

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
  }
}

function main() {
  r_div.addEventListener("click", function() {
    game("r");
  });

  p_div.addEventListener("click", function() {
    game("p");
  });

  s_div.addEventListener("click", function() {
    game("s");
  });
}

main();

let human_score = 0;
let comp_score = 0;
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissor");
const score_board = document.getElementById("h2");
const RESULT = document.getElementById("h3");

function comp_choice() {
  let rand = Math.floor(Math.random() * 10);
  let choice;
  if (rand >= 0 && rand <= 3) {
    choice = "rock";
  } else if (rand >= 4 && rand <= 7) {
    choice = "paper";
  } else {
    choice = "scissor";
  }

  return choice;
}

let choice;
rock_button.addEventListener("click", () => {
  choice = "rock";
  playRound(choice, comp_choice());
});
paper_button.addEventListener("click", () => {
  choice = "paper";
  playRound(choice, comp_choice());
});
scissor_button.addEventListener("click", () => {
  choice = "scissor";
  playRound(choice, comp_choice());
});

function playRound(hc, cc) {
  if (hc === "rock" && cc === "scissor") {
    human_score++;
    output(1, hc, cc);
  } else if (hc === "paper" && cc === "rock") {
    human_score++;
    output(1, hc, cc);
  } else if (hc === "scissor" && cc === "paper") {
    human_score++;
    output(1, hc, cc);
  } else if (hc === cc) {
    output(2, hc, cc);
  } else {
    comp_score++;
    output(0, hc, cc);
  }
  score_board.innerHTML = `Your Score: ${human_score} <br>Computer Score: ${comp_score}`;
}

function output(result, hc, cc) {
  if (human_score + comp_score == 5) {
    if (human_score > comp_score) {
      RESULT.innerText = "You win the game!";
      human_score = 0;
      comp_score = 0;
    } else if (comp_score > human_score) {
      RESULT.innerText = "Computer wins the game!";
      human_score = 0;
      comp_score = 0;
    }
  } else {
    if (result == 1) {
      RESULT.innerHTML = `You chose: ${hc} <br />Computer chose: ${cc} <br /> You win!`;
    } else if (result == 0) {
      RESULT.innerHTML = `You chose: ${hc} <br />Computer chose: ${cc} <br /> You loose!`;
    } else {
      RESULT.innerHTML = `You chose: ${hc} <br />Computer chose: ${cc} <br /> It's a Tie!`;
    }
  }
}
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-points");
const compPoints = document.querySelector("#comp-points");
const compHand = document.querySelector(".choices-comp");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "It was a Draw!";
  msg.style.backgroundColor = "#535c91";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (compChoice === "rock") {
    compHand.innerHTML = '<img src="./images/rock-comp.png"/>';
  } else if (compChoice === "paper") {
    compHand.innerHTML = '<img src="./images/paper-comp.png"/>';
  } else if (compChoice === "scissors") {
    compHand.innerHTML = '<img src="./images/scissors-comp.png"/>';
  } else {
    compHand.innerHTML = '<img src="./images/hand-comp.png"/>';
  }

  if (userWin) {
    userScore++;
    userPoints.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats computer's ${compChoice}`;
    msg.style.backgroundColor = "rgb(5, 224, 5)";
  } else {
    compScore++;
    compPoints.innerText = compScore;
    msg.innerText = `You Lose! Computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") {
      if (compChoice === "rock") {
        userWin = true;
      } else {
        userWin = false;
      }
    } else {
      if (compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

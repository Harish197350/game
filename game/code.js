let userScore = 0;
let computerScore = 0;
let draws = 0 ;

const drawsSpan = document.getElementById("draws");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.querySelector("#message");
const resetButton = document.getElementById("reset-button")

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


const getComputerChoice = () => {
  const choiceList = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random()*3);
  return (choiceList[randomNumber]);
};


const convert = (word) => {
  switch(word) {
    case "rock":
      return "Rock";
      break;
    case "paper":
      return "Paper";
      break;
    case "scissors":
      return "Scissors";
      break;
  }
};

const win = (userChoice, computerChoice) => {
  userScore++;
  userScoreSpan.innerHTML = userScore;

  resultDiv.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You win!`;
};

const lose = (userChoice, computerChoice) => {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;

  resultDiv.innerHTML =`${convert(computerChoice)} beats ${convert(userChoice)}. You lose!`;
};

const tie = (userChoice, computerChoice) => {
  draws++;
  drawsSpan.innerHTML = draws ;  

  resultDiv.innerHTML = `${convert(userChoice)} matches ${convert(computerChoice)}. It's a TIE!`;
};




const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }

};


const resetScores = () => {
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
  draws = 0;
  drawsSpan.innerHTML = draws ;
  resultDiv.innerHTML = 'Who will win this match ?';
};

const main = () => {
  rockDiv.addEventListener('click', () => game("rock"));

  paperDiv.addEventListener('click', () => game("paper"));

  scissorsDiv.addEventListener('click', () => game("scissors"));

  resetButton.addEventListener('click', () => resetScores());
};


main();
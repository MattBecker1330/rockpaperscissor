// get computer choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissor"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper" || "scissor") {
      return "Computer Won!";
    } else {
      return "User Won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissor" || "rock") {
      return "Computer Won!";
    } else {
      return "User Won!";
    }
  }
  if (userChoice === "scissor") {
    if (computerChoice === "rock" || "paper") {
      return "Computer Won!";
    } else {
      return "User Won!";
    }
  }
};

function playGame() {
  var userChoice = getUserChoice("paper");
  var computerChoice = getComputerChoice("scissor");
  console.log(userChoice, computerChoice); //Choices made
  console.log(determineWinner(userChoice, computerChoice)); //Determines winner
}

console.log(playGame());

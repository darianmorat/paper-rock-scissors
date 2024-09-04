const computerSelection = document.querySelector(".computer-selection");
const userSelection = document.querySelector(".user-selection");
const userChoice = document.querySelectorAll(".button");
const result = document.querySelector(".result");
const resultDescription = document.querySelector(".result-description");
const userAnimation = document.querySelector(".user-animation-false");
const computerAnimation = document.querySelector(".computer-animation-false");

// resolve small bug: when u finish the game, and u win again it show that your point is 2 when in
// reality should be 1 whoever - is winning put the text with a underline green

// Change  design

// Add ask name option
// e.g.
// const userName = document.querySelector('#user-selection');
// const askName = prompt('what is your name?: ');
// userName.innerHTML = askName + ': ';

// Add a dark mode option
// Add restart game button at the end
// remove the default and computer options and add the button or, think if is better to show a popup

// Try to show different messages, not always the same ones, so create 2-3 msgs that can be randomly alternate

// HARD THINGS TO IMPLEMENT
// make the game of 3 levels. If win 3 games in streak u can change something
// profile section

let playUser;
let playComputer;
let getResult;

let userCount = 0;
let computerCount = 0;

userChoice.forEach((choice) =>
   choice.addEventListener("click", (e) => {
      playUser = e.target.id;
      computerChoice();
      results();
      points();
      winner();
   })
);

function computerChoice() {
   const randomNumber = Math.floor(Math.random() * userChoice.length);

   if (randomNumber === 0) {
      playComputer = "Rock";
   } else if (randomNumber === 1) {
      playComputer = "Paper";
   } else if (randomNumber === 2) {
      playComputer = "Scissors";
   }
}

function results() {
   if (playUser === playComputer) {
      getResult = "It's a tie";
      resultDescription.innerHTML = "COME ON!, are u gonna lose against a computer?";
   } else if (playUser === "Rock" && playComputer === "Paper") {
      getResult = "You lost!";
      resultDescription.innerHTML = "Paper beats rock";
   } else if (playUser === "Rock" && playComputer === "Scissors") {
      getResult = "You won!";
      resultDescription.innerHTML = "Rock beats scissors";
   } else if (playUser === "Paper" && playComputer === "Rock") {
      getResult = "You won!";
      resultDescription.innerHTML = "Paper beats rock";
   } else if (playUser === "Paper" && playComputer === "Scissors") {
      getResult = "You lost!";
      resultDescription.innerHTML = "Scissors beats paper";
   } else if (playUser === "Scissors" && playComputer === "Rock") {
      getResult = "You lost!";
      resultDescription.innerHTML = "Rock beats scissors";
   } else if (playUser === "Scissors" && playComputer === "Paper") {
      getResult = "You won!";
      resultDescription.innerHTML = "Scissors beats paper";
   }
   result.innerHTML = getResult;
}

function points() {
   // user counter
   if (getResult === "You won!") {
      userCount++;
      userSelection.innerHTML = userCount;

      // animation
      userAnimation.classList.add("user-animation");
      setTimeout(() => {
         userAnimation.classList.remove("user-animation");
      }, 500);
   }

   // computer
   else if (getResult === "You lost!") {
      computerCount++;
      computerSelection.innerHTML = computerCount;

      // animation
      computerAnimation.classList.add("computer-animation");
      setTimeout(() => {
         computerAnimation.classList.remove("computer-animation");
      }, 500);
   }

   // tie counter
   else {
      // animation
      userAnimation.classList.add("user-animation");
      computerAnimation.classList.add("computer-animation");
      setTimeout(() => {
         userAnimation.classList.remove("user-animation");
         computerAnimation.classList.remove("computer-animation");
      }, 500);
   }
}

function winner() {
   if (userCount === 5) {
      result.innerHTML = "YOU WON THE GAME!";
      resultDescription.innerHTML = "Congratulations!";
      resetGame();
   } else if (computerCount === 5) {
      result.innerHTML = "YOU LOSE THE GAME!";
      resultDescription.innerHTML = "You should find a better job";
      resetGame();
   }

   function resetGame() {
      userCount = 1;
      computerCount = 1;
      userSelection.innerHTML = 0;
      computerSelection.innerHTML = 0;
   }
}

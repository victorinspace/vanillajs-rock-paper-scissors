// TODO:
// - Generate AI response / weapon select
// - Provide player feedback:
//     - What did they pick?
//     - What did the computer pick?
//     - What was the outcome?

const generateAISelection = function () {
  return Math.floor(Math.random() * Math.floor(3));
};

const activateGame = function (e) {
  e.preventDefault;

  let playerSelectedWeapon = e.target.id;

  console.log(`Weapon Selected: ${playerSelectedWeapon}`);

  let gameTable = document.getElementById("weapon-locker");
  gameTable.style.display = "none";
};

const resetGame = function (e) {
  e.preventDefault;

  console.log("Game Reset");

  let gameTable = document.getElementById("weapon-locker");

  if (gameTable.style.display === "none") {
    gameTable.style.display = "flex";
  }
};

let rock = document.getElementById("rock");
rock.addEventListener("click", activateGame);

let paper = document.getElementById("paper");
paper.addEventListener("click", activateGame);

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", activateGame);

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

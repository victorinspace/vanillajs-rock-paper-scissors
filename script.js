// TODO:
// - Provide player feedback:
//     - What was the outcome?
// - Remove global variables:
//     - Use IFEE?

const weaponOptions = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

const computerWeapon = function () {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));

  console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      return weaponOptions.rock;
      break;
    case 2:
      return weaponOptions.paper;
      break;
    default:
      return weaponOptions.scissors;
  }
};

const checkWinCondition = function (playerWeapon, computerWeapon) {
  matchResult.style.display = "block";

  if (playerWeapon == computerWeapon) {
    matchResult.innerText = "TIE!";
  } else if (playerWeapon == "rock") {
    if (computerWeapon == "paper") {
      console.log("AI Wins!");
      matchResult.innerText = "AI Wins!";
    } else {
      console.log("You Win!");
      matchResult.innerText = "You Win!";
    }
  } else if (playerWeapon == "paper") {
    if (computerWeapon == "scissors") {
      console.log("AI Wins!");
      matchResult.innerText = "AI Wins!";
    } else {
      console.log("You Win!");
      matchResult.innerText = "You Win!";
    }
  } else if (playerWeapon == "scissors") {
    if (computerWeapon == "rock") {
      console.log("AI Wins!");
      matchResult.innerText = "AI Wins!";
    } else {
      console.log("You Win!");
      matchResult.innerText = "You Win!";
    }
  }
};

const showResult = function (playerWeapon, computerWeapon) {
  weaponLocker.style.display = "none";
  battleArena.style.display = "flex";

  document.getElementById(
    "player-weapon"
  ).innerText = `You selected: ${playerWeapon} `;
  document.getElementById(
    "AI-weapon"
  ).innerText = `Computer selected: ${computerWeapon}`;

  checkWinCondition(playerWeapon, computerWeapon);
};

const activateGame = function (e) {
  e.preventDefault;

  let playerWeapon = e.target.id;

  showResult(playerWeapon, computerWeapon());
};

const resetGame = function (e) {
  e.preventDefault;

  console.log("Game Reset");

  if (weaponLocker.style.display === "none") {
    weaponLocker.style.display = "flex";
    battleArena.style.display = "none";
    matchResult.style.display = "none";
  }
};

const rock = document.getElementById("rock");
rock.addEventListener("click", activateGame);

const paper = document.getElementById("paper");
paper.addEventListener("click", activateGame);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", activateGame);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

const weaponLocker = document.getElementById("weapon-locker");

const battleArena = document.getElementById("battle-arena");

const matchResult = document.getElementById("match-result");

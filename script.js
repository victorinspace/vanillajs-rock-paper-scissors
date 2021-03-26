// TODO:
// - Generate AI response / weapon select
// - Provide player feedback:
//     - What did they pick?
//     - What did the computer pick?
//     - What was the outcome?

const weaponOptions = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

const computerWeapon = function () {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));

  // FIX: sometimes generates error return
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

const showResult = function (playerWeapon) {
  weaponLocker.style.display = "none";
  battleArena.style.display = "flex";

  console.log(`Weapon Selected: ${playerWeapon}`);
  document.getElementById("player-weapon").innerText = `${playerWeapon}`;
  document.getElementById("AI-weapon").innerText = `${computerWeapon()}`;
};

const activateGame = function (e) {
  e.preventDefault;

  let playerWeapon = e.target.id;

  showResult(playerWeapon);
};

const resetGame = function (e) {
  e.preventDefault;

  console.log("Game Reset");

  if (weaponLocker.style.display === "none") {
    weaponLocker.style.display = "flex";
    battleArena.style.display = "none";
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

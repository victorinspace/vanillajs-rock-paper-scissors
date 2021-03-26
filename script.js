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

const randomNumber = function () {
  return Math.floor(Math.random() * Math.floor(3));
};

const showResult = function () {
  weaponLocker.style.display = "none";
  document.getElementById("battle-arena").style.display = "flex";

  document.getElementById("player-weapon").innerText = `${randomNumber()}`;
  document.getElementById("AI-weapon").innerText = `${randomNumber()}`;
};

const activateGame = function (e) {
  e.preventDefault;

  let playerWeapon = e.target.id;
  console.log(`Weapon Selected: ${playerWeapon}`);

  showResult();
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

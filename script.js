const generateWeaponAI = function () {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));

  const weaponOptions = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
  };

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
  const matchResult = document.getElementById("match-result");
  matchResult.style.display = "block";

  if (playerWeapon == computerWeapon) {
    matchResult.innerText = "TIE!";
  } else if (playerWeapon == "rock") {
    if (computerWeapon == "paper") {
      matchResult.innerText = "AI Wins!";
    } else {
      matchResult.innerText = "You Win!";
    }
  } else if (playerWeapon == "paper") {
    if (computerWeapon == "scissors") {
      matchResult.innerText = "AI Wins!";
    } else {
      matchResult.innerText = "You Win!";
    }
  } else if (playerWeapon == "scissors") {
    if (computerWeapon == "rock") {
      matchResult.innerText = "AI Wins!";
    } else {
      matchResult.innerText = "You Win!";
    }
  }
};

const showResult = function (playerWeapon, computerWeapon, weapons, arena) {
  weapons.style.display = "none";
  arena.style.display = "flex";

  document.getElementById(
    "player-weapon"
  ).innerText = `You selected: ${playerWeapon} `;
  document.getElementById(
    "AI-weapon"
  ).innerText = `Computer selected: ${computerWeapon}`;

  checkWinCondition(playerWeapon, computerWeapon);
};

const activateGame = function (e) {
  const weaponLocker = document.getElementById("weapon-locker");
  const battleArena = document.getElementById("battle-arena");

  e.preventDefault;

  let playerWeapon = e.target.id;

  showResult(playerWeapon, generateWeaponAI(), weaponLocker, battleArena);
};

document.getElementById("rock").addEventListener("click", activateGame);

document.getElementById("paper").addEventListener("click", activateGame);

document.getElementById("scissors").addEventListener("click", activateGame);

document.getElementById("reset-button").addEventListener("click", (e) => {
  e.preventDefault;

  if (document.getElementById("weapon-locker").style.display === "none") {
    document.getElementById("weapon-locker").style.display = "flex";
    document.getElementById("battle-arena").style.display = "none";
    document.getElementById("match-result").style.display = "none";
  }
});

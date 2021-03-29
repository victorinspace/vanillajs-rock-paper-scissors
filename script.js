const generateWeaponAI = () => {
  const weaponOptions = ["rock", "paper", "scissors"];
  return weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
};

const youWin = (matchResult) => (matchResult.innerText = "You Win!");
const AIWins = (matchResult) => (matchResult.innerText = "AI Wins!");

const checkWinCondition = (playerWeapon, computerWeapon) => {
  const matchResult = document.getElementById("match-result");
  matchResult.style.display = "block";

  switch (playerWeapon) {
    case "rock":
      if (computerWeapon === "paper") AIWins(matchResult);
      if (computerWeapon === "scissors") youWin(matchResult);
      break;
    case "paper":
      if (computerWeapon === "scissors") AIWins(matchResult);
      if (computerWeapon === "rock") youWin(matchResult);
      break;
    case "scissors":
      if (computerWeapon === "rock") AIWins(matchResult);
      if (computerWeapon === "paper") youWin(matchResult);
      break;
  }

  playerWeapon == computerWeapon && (matchResult.innerText = "TIE!");
};

const showResult = (playerWeapon, computerWeapon, weapons, arena) => {
  weapons.style.display = "none";
  arena.style.display = "flex";

  const playerChoice = document.getElementById("player-weapon");
  playerChoice.innerText = `You selected: ${playerWeapon} `;

  const AIChoice = document.getElementById("AI-weapon");
  AIChoice.innerText = `Computer selected: ${computerWeapon}`;

  checkWinCondition(playerWeapon, computerWeapon);
};

const activateGame = (e) => {
  e.preventDefault;

  const weaponLocker = document.getElementById("weapon-locker");
  const battleArena = document.getElementById("battle-arena");

  let playerWeapon = e.target.id;

  showResult(playerWeapon, generateWeaponAI(), weaponLocker, battleArena);
};

const weapons = document.querySelectorAll(".weapon");
weapons.forEach((weapon) => weapon.addEventListener("click", activateGame));

document.getElementById("reset-button").addEventListener("click", (e) => {
  e.preventDefault;

  if (document.getElementById("weapon-locker").style.display === "none") {
    document.getElementById("weapon-locker").style.display = "flex";
    document.getElementById("battle-arena").style.display = "none";
    document.getElementById("match-result").style.display = "none";
  }
});

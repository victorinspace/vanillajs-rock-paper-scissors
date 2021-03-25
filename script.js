const activateGame = function (e) {
  e.preventDefault;
  let weaponSelected = e.target.id;
  console.log(` Weapon Selected: ${weaponSelected}`);

  let showWeapons = (document.querySelector(".game-table").innerHTML = `
    <div>
      <h1 class="show-weapon-selected">${weaponSelected}</h1>
    </div>
    <div>
      <h1 class="AI-selected">Your enemy has selected: WEAPON_ITEM</h1>
    </div>
  `);
};

const resetGame = function (e) {
  e.preventDefault;
  console.log("game reset");
  document.querySelector(".game-table").innerHTML = `
    <div id="weapon-locker" class="weapon-locker">
      <span id="rock" class="weapon">Rock</span>
      <span id="paper" class="weapon">Paper</span>
      <span id="scissors" class="weapon">Scissors</span>
    </div>
  `;
};

let rock = document.getElementById("rock");
rock.addEventListener("click", activateGame);

let paper = document.getElementById("paper");
paper.addEventListener("click", activateGame);

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", activateGame);

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

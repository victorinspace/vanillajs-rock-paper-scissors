const eventListener = function (e) {
  console.log(e);
};
document.getElementById("rock").addEventListener("click", eventListener);
document.getElementById("paper").addEventListener("click", eventListener);
document.getElementById("scissors").addEventListener("click", eventListener);

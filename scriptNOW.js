// Array of beauty tips
const beautyTips = [
  "Drink water",
  "Always remove makeup before bed",
  "Use sunscreen every day",
  "Moisturizing helps prevent dry skin.",
  "Exfoliate twice a week!",
  "Eating healthy foods can make your skin look even better!"
];

function displayRandomTip(){
  let randomIndex = Math.floor(Math.random() * beautyTips.length);
  document.getElementById("tip-text").textContent = beautyTips[randomIndex];
}

window.onload = function () {
  document.getElementById("tipbutton").addEventListener("click", displayRandomTip);
};

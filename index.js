

function diceRoll() {
    // Dice 1 (Left)
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSrc = "/images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

// Dice 2 (Right)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

    // If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  
  // If player 2 wins
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  
  // If it's a draw
  else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
  }

}
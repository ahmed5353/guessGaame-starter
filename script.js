"use strict";
let score = 20;
let highScore = 0;

// document.querySelector(".again").addEventListener("click", function () {
//   window.location.reload();
// });

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let ranNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number !";
    displayMessage("⛔ No Number !");
  }
  //when win
  else if (ranNum === guess) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.transition = ".5s";
    document.querySelector(".number").textContent = ranNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when is too high
  } else if (ranNum !== guess) {
    if (score > 1) {
      displayMessage(guess > ranNum ? "Too high 📈  !" : "Too Low 📉!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      const score = 0;
      displayMessage("Game Over to play again !");
      document.body.style.backgroundColor = "red";
      document.querySelector(".score").textContent = score;
    }
    // } else if (ranNum > guess) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "Too Low 📉 !";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     const score = 0;
    //     document.querySelector(".message").textContent =
    //       "Game Over to play again restart the page !";
    //     document.body.style.backgroundColor = "red";
    //     document.querySelector(".score").textContent = score;
    //   }
    //   // when is too low
    // } else if (ranNum < guess) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "Too high 📈 !";
    //     score--;
    //     document.querySelector(".score").textContent = score;

    //     //whaen lose the game
    //   } else {
    //     const score = 0;

    //     document.querySelector(".message").textContent =
    //       "Game Over to play again restart the page !";

    //     document.body.style.backgroundColor = "red";
    //     document.querySelector(".score").textContent = score;
    //   }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  ranNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing ...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

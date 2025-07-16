// for (var i = 0; i < 5; i++) {

//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);

// }
// for (let i = 0; i < 5; i++) {

//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);

// }
// for (var i = 0; i < 5; i++) {
//   function wrapper(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, x * 1000);
//   }
//   wrapper(i)
// }

const startButton = document.getElementById("start");
const drawButton = document.getElementById("draw-card");
const myCard = document.getElementById("your-card");
const sum = document.getElementById("sum");
const messageText = document.querySelector(".safe");
const cautionText = document.querySelector(".caution");
const wonText = document.querySelector(".won");
let cards = [];
startButton.addEventListener("click", () => {
  cards = [];
  console.log("clicked");
  drawButton.style.display = "inline-block";
  startButton.style.display = "none";
  sum.style.display = "inline-block";
  sum.textContent = "Sum : ";
  myCard.textContent = "Card : ";
  myCard.style.display = "inline-block";
  messageText.style.display = "block";
  messageText.style.display = "block";
  wonText.style.display = "none";
  cautionText.style.display = "none";
});

drawButton.addEventListener("click", () => {
  getRandomCard();
  myCard.textContent =
    "Card : " +
    cards.reduce((accumulator, card) => {
      return (accumulator += " " + card);
    }, "");
  let cardSum = cards.reduce((acc, card) => {
    return acc + card;
  }, 0);
  sum.textContent = "Sum : " + cardSum;
  game(cardSum);
});

function game(x) {
  if (x == 21) {
    wonText.style.display = "block";
    cautionText.style.display = "none";
    messageText.style.display = "none";

    drawButton.style.display = "none";
    startButton.style.display = "inline-block";
  } else if (x > 21) {
    wonText.style.display = "none";
    cautionText.style.display = "block";
    messageText.style.display = "none";

    drawButton.style.display = "none";
    startButton.style.display = "inline-block";
  }
}

function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card > 10) {
    card = 10;
  } else if (card === 1) card = 11;
  cards.push(card);
  console.log(cards);
}


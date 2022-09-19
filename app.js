document.addEventListener("DOMContentLoaded", () => {
  // here are card options
  const cards = [
    {
      name: "marcy",
      img: "assets/marcy.webp",
    },
    {
      name: "marcy",
      img: "assets/marcy.webp",
    },
    {
      name: "bonnie",
      img: "assets/bonnie.webp",
    },
    {
      name: "bonnie",
      img: "assets/bonnie.webp",
    },
    {
      name: "finn",
      img: "assets/finn.png",
    },
    {
      name: "finn",
      img: "assets/finn.png",
    },
    {
      name: "jake",
      img: "assets/jake.png",
    },
    {
      name: "jake",
      img: "assets/jake.png",
    },
    {
      name: "lumpy",
      img: "assets/lumpy.jpg",
    },
    {
      name: "lumpy",
      img: "assets/lumpy.jpg",
    },
  ];

  cards.sort(() => 0.5 - Math.random());

  const game = document.querySelector(".game");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create the board
  function createBoard() {
    for (let i of cards) {
      let card = document.createElement("img");
      card.setAttribute("src", "assets/gray.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      game.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    let cards1 = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found the match");
      cards1[optionOneId].setAttribute("src", "assets/blank.png");
      cards1[optionTwoId].setAttribute("src", "assets/blank.png");
      cardsWon.push(cardsChosen);
    } else {
      cards1[optionOneId].setAttribute("src", "assets/gray.jpg");
      cards1[optionTwoId].setAttribute("src", "assets/gray.jpg");
      console.log("try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cards.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cards[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cards[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});

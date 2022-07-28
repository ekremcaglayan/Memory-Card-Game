let count = 0;
let score = 0;

var numArray = [];
var imagesArray = [
  "images/altaybayindir.png", "images/attilaszalai.png",
  "images/ardaguler.png", "images/irfancankahveci.png",
  "images/kim-min-jae.png", "images/nazimsangare_3.png",
  "images/pelkasvesikalik.png", "images/serdaraziz.png",
  "images/altaybayindir.png", "images/attilaszalai.png",
  "images/ardaguler.png", "images/irfancankahveci.png",
  "images/kim-min-jae.png", "images/nazimsangare_3.png",
  "images/pelkasvesikalik.png", "images/serdaraziz.png"
];

function changeImage() {
  const elements = document.querySelectorAll(".front-side");
  for (let i = 0; i < elements.length; i++) {
    const imageIndex = Math.floor(Math.random() * imagesArray.length);
    const randomImage = imagesArray[imageIndex];
    elements[i].querySelector("img").src = randomImage;
    imagesArray.splice(imageIndex, 1);
  }
}
changeImage();

function flipFront(t) {
  const element = t.target.closest("div"); // t = click
  const frontSide = element.closest("li").querySelector(".front-side");
  const countArea = document.querySelector(".countArea");
  element.style.display = "none";
  frontSide.style.display = "block";
  count += 1;
  countArea.textContent = "Click count: " + count;
  numArray.push(frontSide);
  if (numArray.length > 1) {
    if (numArray[0].querySelector("img").src == numArray[1].querySelector("img").src) {
      const scoreArea = document.querySelector(".scoreArea");
      const textArea = document.querySelector(".textArea");
      score += 10;
      if (score == 80) {
        if (count < 30) {
          textArea.textContent = "EXCELLENT!!!";
        }
        else if (count < 50 && count > 30) {
          textArea.textContent = "NOT BAD :)";
          score -= 30;
        }
        else {
          textArea.textContent = "TRY AGAIN :(";
          score -= 80;
        }
      }
      scoreArea.textContent = "Score: " + score;
    }
    if (numArray.length > 1) {
      var cardOne = numArray.shift();
      var cardTwo = numArray.shift();
      setTimeout(flipBack, 1000, cardOne, cardTwo);
    }
  }
}

function flipBack(cardOne,cardTwo) {
  if (cardOne.querySelector("img").src == cardTwo.querySelector("img").src) {
    cardOne.style.display = "block";
    cardTwo.style.display = "block";
  } else {
    cardOne.style.display = "none";
    cardTwo.style.display = "none";
    cardOne.closest("li").querySelector(".back-side").style.display = "block";
    cardTwo.closest("li").querySelector(".back-side").style.display = "block";
  }
}

const back = document.getElementsByClassName("back-side");
for (let index = 0; index < back.length; index++) {
  const element = back[index];
  element.addEventListener("click", flipFront);
}

function reset() {
  location.reload();
}
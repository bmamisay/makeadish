const dishes = [
  {
    name: "Adobo Buddy",
    image: "images/adobo.png"
  },
  {
    name: "BBQ Stick Buddy",
    image: "images/bbq.png"
  },
  {
    name: "Burger Buddy",
    image: "images/burger.png"
  },
  {
    name: "Burrito Buddy",
    image: "images/burrito.png"
  },
  {
    name: "Cali Roll Cutie",
    image: "images/caliroll.png"
  },
  {
    name: "Coffee Cutie",
    image: "images/coffee.png"
  },
  {
    name: "Coke Cutie",
    image: "images/coke.png"
  },
  {
    name: "Curry Buddy",
    image: "images/curry.png"
  },
  {
    name: "Nigiri Buddy",
    image: "images/nigiri.png"
  },
  {
    name: "Sinigang Smile",
    image: "images/sinigang.png"
  },
  {
    name: "Spam Buddy",
    image: "images/spam.png"
  },
  {
    name: "Thai Tea Cutie",
    image: "images/thai.png"
  },
  {
    name: "Tteokbokki Buddy",
    image: "images/tteok.png"
  },
  {
    name: "XLB Buddy",
    image: "images/xlb.png"
  },
  {
    name: "Yubu Cutie",
    image: "images/yubu.png"
  }
];

const dishArea = document.getElementById("dish-area");
const currentTimeText = document.getElementById("current-time");

let chosenDish = null;
let lastDishTime = "";

function isElevenEleven() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const isAM1111 = hours === 11 && minutes === 11;
  const isPM1111 = hours === 23 && minutes === 11;

  return true;
}

function getCurrentDishTimeKey() {
  const now = new Date();

  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}`;
}

function getRandomDish() {
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
}

function showDish(dish) {
  dishArea.innerHTML = `
    <div class="dish-card">
      <img class="dish-image" src="${dish.image}" alt="${dish.name}">
      <div class="dish-name">${dish.name}</div>
    </div>
  `;
}

function showLockedMessage() {
  dishArea.innerHTML = `
    <div class="locked-message">
      Come back at 11:11 to make a dish 🍽️
    </div>
  `;
}

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  currentTimeText.textContent = `${hours}:${minutes} ${ampm}`;
}

function updatePage() {
  updateClock();

  if (isElevenEleven()) {
    const currentDishTime = getCurrentDishTimeKey();

    if (currentDishTime !== lastDishTime) {
      chosenDish = getRandomDish();
      lastDishTime = currentDishTime;
    }

    showDish(chosenDish);
  } else {
    chosenDish = null;
    showLockedMessage();
  }
}

updatePage();

setInterval(updatePage, 1000);
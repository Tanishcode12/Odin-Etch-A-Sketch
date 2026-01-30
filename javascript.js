const container = document.getElementById("container");
const reset = document.getElementById("reset");
const colors = document.getElementById("color");
const numberweneed = document.getElementById("pixels");
const CONTAINER_SIZE = 960;
let number = 16;
let chosencolor = null;
function createGrid(num) {
  container.innerHTML = ""; 
  const squareSize = CONTAINER_SIZE / (num);
  const numberofsquares=num*num;
  for (let i = 0; i < numberofsquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseenter", () => {
      const newColor = chosencolor ?? getRandomRGB();
      square.style.backgroundColor = newColor;
    });
    container.appendChild(square);
  }
}
createGrid(number);
numberweneed.addEventListener("click", () => {
  const input = prompt("How many squares do you want? 100 max!");
  const intnumber = parseInt(input);
   if (isNaN(input) || input <= 0 || input > 100) {
    alert("Please enter a valid number");
    return;
  }
  number = intnumber;
  createGrid(number);
});
colors.addEventListener("click", () => {
  const choicemade = prompt("Enter a color! Write 'random' if you want a random color:");
  if (!choicemade) return;
  if (choicemade.toLowerCase() === "random") {
    chosencolor = getRandomRGB();
  } 
  else {
    chosencolor = choicemade.toLowerCase();
  }
});
reset.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach(square => {
    square.style.backgroundColor = "white";
  });
});
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

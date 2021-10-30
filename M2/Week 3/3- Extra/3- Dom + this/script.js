const randNum = () => Math.floor(Math.random() * 256);
const randColor = () => `rgb(${randNum()}, ${randNum()}, ${randNum()})`;

function colorize() {
  this.style.backgroundColor = randColor();
  this.style.color = randColor();
}

document.querySelectorAll("button").forEach((button) => button.addEventListener("click", colorize));
document.querySelectorAll("h1").forEach((h1) => h1.addEventListener("click", colorize));

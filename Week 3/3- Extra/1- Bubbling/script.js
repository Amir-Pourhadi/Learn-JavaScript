const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (e) {
	container.style.backgroundColor = randColor();
	e.stopPropagation();
});
container.addEventListener("click", () => container.classList.toggle("hide"));

const randColor = () => (newColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`);
const randNum = () => Math.floor(Math.random() * 256);

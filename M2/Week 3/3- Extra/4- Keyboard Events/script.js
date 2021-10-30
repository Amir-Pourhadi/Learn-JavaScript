const input = document.querySelector("input");

document.querySelector("button").addEventListener("click", function (evt) {
  // check out what you have on you console
  console.log(evt);
});

input.addEventListener("keyup", () => {
  console.log("keyup");
});

input.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.code);
});

input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    default:
      console.log("IGNORED");
  }
});

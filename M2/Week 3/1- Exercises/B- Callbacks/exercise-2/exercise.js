/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different.
Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a CodePen? https://codepen.io/makanti/pen/abOreLg
================
*/

function getRandColor() {
  function getRandNum() {
    return Math.floor(Math.random() * 256);
  }

  return `rgb(${getRandNum()},${getRandNum()},${getRandNum()})`;
}

setInterval(() => {
  document.body.style.backgroundColor = getRandColor();
}, 2000);

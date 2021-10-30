/* Please write some JS codes to make the rainbow colored
use this array of colors: */
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

/* your task is to select all spans, iterate over them, assign them each one of the colors from the colors array.
the first span should be red, second one orange and so on.
 */

/* ------------------------------ Best Practice ----------------------------- */

document.querySelectorAll("h1 span").forEach(({ style }, index) => (style.color = colors[index]));

/* -------------------------------- Long Way -------------------------------- */

/* 
Bad Practice:
const rainbow = document.querySelectorAll("span");
let count = 0;
for (const rainbowColor of rainbow) {
	rainbowColor.style.color = colors[count++];
}
 */

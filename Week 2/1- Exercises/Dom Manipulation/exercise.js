/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const pTags = document.querySelectorAll("p");
console.log(pTags);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const jumbotron = document.querySelector("#jumbotron-text");
console.log(jumbotron);

const primaryContentParagraphs = document.querySelectorAll(".primary-content p");
console.log(primaryContentParagraphs);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"

*/

const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", () => alert("Thanks for visiting Bikes for Refugees!"));

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

function getRandColor() {
  function getRandNum() {
    return Math.floor(Math.random() * 256);
  }

  return `rgb(${getRandNum()},${getRandNum()},${getRandNum()})`;
}

const bgrChangeBtn = document.querySelector("#bgrChangeBtn");
const jumbotronClass = document.querySelector(".jumbotron");
bgrChangeBtn.addEventListener("click", () => (jumbotronClass.style.backgroundColor = getRandColor()));

/*
Task 4
======

When a user clicks the 'Add some text' button,
a new paragraph should be added below the buttons that says "Read more below."
*/
function createReadMore() {
  const readMore = document.createElement("p");
  readMore.innerText = "Read more below.";
  jumbotronClass.appendChild(readMore);
}

const addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.addEventListener("click", createReadMore);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

function largerLinks() {
  document.querySelectorAll("a").forEach((a) => (a.style.fontSize = "1.2em"));
}

const largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", largerLinks);

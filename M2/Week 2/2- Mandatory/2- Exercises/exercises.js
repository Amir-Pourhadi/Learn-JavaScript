/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  const content = document.querySelector("#content");

  arrayOfPeople.forEach(({ name, job }) => {
    const nameText = document.createElement("h1");
    nameText.innerText = name;
    content.appendChild(nameText);

    const jobText = document.createElement("h2");
    jobText.innerText = job;
    content.appendChild(jobText);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopList) {
  const content = document.querySelector("#content");

  const shoppingList = document.createElement("ul");

  shopList.forEach((item) => {
    const shoppingItem = document.createElement("li");
    shoppingItem.innerText = item;
    shoppingList.appendChild(shoppingItem);
  });

  content.appendChild(shoppingList);
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(booksArr) {
  const content = document.querySelector("#content");

  const bookList = document.createElement("ul");
  bookList.style.display = "flex";
  bookList.style.justifyContent = "space-around";

  booksArr.forEach(({ title, author, alreadyRead, image }) => {
    const bookItem = document.createElement("li");

    const details = document.createElement("p");
    details.innerText = `${title} - ${author}`;
    bookItem.appendChild(details);

    const img = document.createElement("img");
    img.src = image;
    img.width = 200;
    bookItem.appendChild(img);

    bookItem.style.backgroundColor = alreadyRead ? "green" : "red";
    bookItem.style.width = 400;
    bookItem.style.listStyle = "none";

    bookList.appendChild(bookItem);
  });

  content.appendChild(bookList);
}

//* DO NOT EDIT BELOW HERE

const people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

const shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://booc-theme.mivamerchantdev.com/mm5/graphics/00000001/design-of-everyday_354x512.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image: "https://images1.penguinrandomhouse.com/cover/9780307476708",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SY445_SX342_QL70_FMwebp_.jpg",
  },
];

exerciseThree(books);

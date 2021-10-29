const myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

document.querySelector("#submitBtn").addEventListener("click", submit);

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "127", true);
    [book1, book2].forEach((book) => myLibrary.push(book));
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// check the right input from forms and if its ok -> add the new book (object in array)
// via Book function and start render function
function submit() {
  if (!title.value || !pages.value) {
    alert("Please fill all fields!");
  } else {
    const book = new Book(title.value, title.value, pages.value, check.checked);
    myLibrary.push(book);

    title.value = "";
    author.value = "";
    pages.value = "";
    check.checked = false;
    document.querySelector("#demo").classList.remove("show");

    render();
  }
}

class Book {
  constructor(_title, _author, _pages, _check) {
    this.title = _title;
    this.author = _author;
    this.pages = _pages;
    this.check = _check;
    return this;
  }
}

function render() {
  const table = document.getElementById("display");
  const rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }

  //insert updated row and cells
  const length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = myLibrary[i].title;
    cell2.innerHTML = myLibrary[i].author;
    cell3.innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    cell4.appendChild(changeBut);
    let readStatus = "";
    if (myLibrary[i].check) {
      readStatus = "Yes";
    } else {
      readStatus = "No";
    }
    changeBut.innerHTML = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const delBut = document.createElement("button");
    delBut.id = i + 5;
    cell5.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}

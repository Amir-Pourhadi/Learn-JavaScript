/**

The Reading List
Keep track of which books you read and which books you want to read!

=====
Exercise 1
=====
Create an array of objects, where each object describes a book and has properties for:

- The title (a string)
- Author (a string)
- and alreadyRead (a boolean indicating if you read it yet)

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false,
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    alreadyRead: false,
  },
  {
    title: "Arthashastra",
    author: "Kautilya",
    alreadyRead: true,
  },
  {
    title: "Adventures of Tom Sawyer",
    author: "Mark Twain",
    alreadyRead: true,
  },
  {
    title: "Ben Hur",
    author: "Lewis Wallace",
    alreadyRead: false,
  },
  {
    title: "Mein Kampf",
    author: "Adolf Hitler",
    alreadyRead: false,
  },
  {
    title: "Chitra",
    author: "R.N.Tagore",
    alreadyRead: true,
  },
];

books.forEach(({ title, author, alreadyRead }) =>
  console.log((alreadyRead ? "You already read" : "You still need to read") + ` ${title} by ${author}`)
);

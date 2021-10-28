/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument -
  you can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Prefer to work on a CodePen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/

const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
function showMovies(movies) {
  const allMoviesDiv = document.querySelector("#all-movies");
  const movieCount = document.querySelector("#movies-number");

  movies.forEach(({ title, director }, index) => {
    const titleDiv = document.createElement("p");
    titleDiv.innerHTML = `<b>${index + 1}) ${title}</b> - <em>${director}</em>`;
    allMoviesDiv.appendChild(titleDiv);
  });

  movieCount.innerText = movies.length;
}

// create a new movie object for your favorite movie
const myMovie = {
  title: "The Nun",
  director: "Alex Mason",
  type: "horror",
  haveWatched: true,
};

// create addMovies function
function addMovie(movie) {
  movies.push(movie);
}

setTimeout(() => {
  showMovies(movies);
}, 1000);

setTimeout(() => {
  addMovie(myMovie);
}, 2000);

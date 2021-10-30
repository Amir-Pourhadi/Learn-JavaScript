/* ------------------------- SPREAD ARRAY OF NUMBERS ------------------------ */

Math.max(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43); //?
Math.min(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43); //?

const nums = [13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43];

console.log(Math.max(nums)); //=> NaN

console.log(Math.max(...nums)); //=> 7665
console.log(Math.min(...nums)); //=> 3

console.log(nums); //=> [13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43]
console.log(...nums); //=> 13 4 5 21 3 3 3 7665 7 4 74 3 4 6 43

/* ------------------------------ SPREAD STRING ----------------------------- */

console.log("Hello"); //=> Hello
console.log(..."Hello"); //=> H e l l o
console.log("H", "e", "l", "l", "o"); //=> H e l l o

/* ------------------------- SPREAD ARRAY OF STRING ------------------------- */

const cats = ["Persian", "British", "Devon"];
const dogs = ["Greyhound", "Saluki", "Retriever"];

let allPets;
allPets = [...cats];
console.log(cats, allPets); //=> [ 'Persian', 'British', 'Devon' ] [ 'Persian', 'British', 'Devon' ]

allPets.push("Scottish fold");
console.log(cats, allPets); //=> [ 'Persian', 'British', 'Devon' ] [ 'Persian', 'British', 'Devon', 'Scottish fold' ]

allPets = [1, 2, 3, ...cats, ...dogs, "Dachshund"];
console.log(allPets); //=> [1, 2, 3, "Persian", "British", "Devon", "Greyhound", "Saluki", "Retriever", "Dachshund"]

console.log([..."hello"]); //=> [ 'h', 'e', 'l', 'l', 'o' ]

/* ------------------------------ SPREAD OBJECT ----------------------------- */

const foxhound = { legs: 4, family: "English, American" };
const Bergamasco = { isFurry: true, family: "Persian sheepdog breed" };

let rareDogs;
rareDogs = { ...foxhound, color: "brown white black" };
console.log(rareDogs); //=> { legs: 4, family: 'English, American', color: 'brown white black' }

rareDogs = { ...foxhound, ...Bergamasco };
console.log(rareDogs); //=> { legs: 4, family: 'Persian sheepdog breed', isFurry: true }

rareDogs = { ...foxhound, ...Bergamasco, family: "mixed" };
console.log(rareDogs); //=> { legs: 4, family: 'mixed', isFurry: true }

/* ----------------- ARRAY AND STRING SPREAD INTO AN OBJECT ----------------- */

console.log({ ...[1, 2, 3] }); //=> { '0': 1, '1': 2, '2': 3 }
console.log({ ..."Hello" }); //=> { '0': 'H', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

/* ----------------------------- ANOTHER EXAMPLE ---------------------------- */

const dataFromForm = {
  email: "fake@gmail.com",
  password: "fakeFake123",
  username: "fakeFunk",
};

const updateUser = {
  ...dataFromForm,
  id: "_1234",
  isAdmin: false,
  email: "notFake@gmail.com",
};

console.log(updateUser); //=> { email: "notFake@gmail.com", password: "fakeFake123", username: "fakeFunk", id: "_1234", isAdmin: false }

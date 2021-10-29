const personOne = {
  name: "Popeye",
  age: 34,
  favoriteFood: "Spinach",
};

function introduceYourself({ name, age, favoriteFood }) {
  console.log(`Hello, my name is ${name}. I am ${age} years old and my favorite food is ${favoriteFood}.`);
}

introduceYourself(personOne);

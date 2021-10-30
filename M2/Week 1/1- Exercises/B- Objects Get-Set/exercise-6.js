const laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
  colors: ["spaceGray", "black", "white"],
};

console.log(laptop); // the whole object
console.log(laptop.brand); // Lenovo
console.log(laptop["brand"]); // Lenovo

let animal = "Octopus";
function observe() {
  let animal = "Squid";
  console.log(animal);
}
observe(); // Octopus

const creature = "Dragon";
function scubaDive() {
  const creature = "Spanish Dancer"; //a type of sea slug
  console.log(creature);
}
scubaDive(); // Spanish Dancer

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpion fish";
  console.log(deadlyAnimal);
}
handleAnimal(); // Scorpion fish
console.log(deadlyAnimal); // Blue-Ringed Octopus

// Implement arrow function no variables
const noVar = () => {
  return "Hello there";
};

// Implement arrow function with one variable
const oneVar = (param) => {
  return `You entered ${param}`;
};

// Implement arrow function with two variables
const twoVar = (amount, fruit) => {
  return `You have ${amount} ${fruit}`;
};

// This arrow function should return the object literal:
const fruitObj = { fruit: "apple", colour: "red" };

const objLiteral = ({ fruit, colour }) => {
  return `You have ${colour} ${fruit}`;
};

console.log(noVar());
console.log(oneVar("Arrow Function"));
console.log(twoVar(3, "bananas"));
console.log(objLiteral(fruitObj));

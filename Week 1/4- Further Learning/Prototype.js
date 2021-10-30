// js is often described as a "prototype-based language"
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// type these in a browser console and see what is __proto__ contains:
//  []     => it's and empty array

// also try this one in browser console
const arr = [1, 2, 3];

//let's we make a method to this arr:

arr.sing = function () {
  return console.log("la la la");
};

//now use a prototype method:
arr.push(4);

// point is: where sing appears vs where push appears

//now do this:

const body = document.body;

console.dir(body);

// now find prototype

// now this one:

Array.prototype;

String.prototype;

//let's make a prototype :)
//don't try it at home :D, it's not what I want you to do as a regular pattern,
//but I want you to understand what is prototype
String.prototype.grumps = () => alert("khkhkhkhkhkhkhkh....");
const cat = "Blue";
cat.grumps();
//one more one more
String.prototype.yell = function () {
  console.log(this.toUpperCase);
};
"hello".yell();

//The idea behind prototype is having a single object that contains common properties and methods

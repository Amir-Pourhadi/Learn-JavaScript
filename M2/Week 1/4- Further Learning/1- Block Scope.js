let radius = 8;
if (radius > 0) {
  const PI = 3.14;
  let msg = "Hi";

  console.log(PI); // 3.14
  console.log(msg); // Hi

  // BLOCK SCOPE
}

console.log(radius); // 8
console.log(PI); // not defined!
console.log(msg); //not defined!

/* -------------------------------------------------------------------------- */

for (let i = 0; i < 5; i++) {
  const msg = "hooy";
  console.log(msg); // hooy

  // BLOCK SCOPE
}

console.log(msg); //not defined!
console.log(i); //not defined!

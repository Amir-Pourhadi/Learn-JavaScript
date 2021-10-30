function sum1() {
  console.log(arguments);
}
sum1();

function sum2(...nums) {
  return `${nums} => ${nums.reduce((acc, curr) => acc + curr)}`;
}

console.log(sum2(1, 2, 3)); //=> 1,2,3 => 6
console.log("==============================");

//! ORDER MATTERS

function raceResults(gold, silver, ...others) {
  console.log(`gold medal goes to: ${gold}`);
  console.log(`silver medal goes to: ${silver}`);
  console.log(`Thanks to: ${others}`);
}

raceResults("Schumacher");
console.log("==============================");
raceResults("Schumacher", "Hamilton");
console.log("==============================");
raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button");

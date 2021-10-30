// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var nums = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyHundred(num) {
  return num * 100;
}

var newNums1 = nums.map(multiplyHundred);

var newNums2 = nums.map(function (num) {
  return num * 100;
});

var newNums3 = nums.map((num) => {
  return num * 100;
});

var newNums4 = nums.map((num) => num * 100);

console.log(newNums1);
console.log(newNums2);
console.log(newNums3);
console.log(newNums4);

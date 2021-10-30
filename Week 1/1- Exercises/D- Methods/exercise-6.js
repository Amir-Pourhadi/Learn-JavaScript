const myMath = {
  PI: 3.14,
  square: function (num) {
    return num * num;
  },
  cube(num) {
    return num * num * num;
  },
};

console.log(myMath.square(12)); // 144
console.log(myMath.cube(12)); // 1728
console.log(myMath.PI); // 3.14
console.log(myMath.square(myMath.PI)); // 9.8596

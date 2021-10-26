/**
   You have to predict the output of this program WITHOUT EXECUTING IT.
    In order to do this, try writing down the value that all variables take
   during each step of the program execution.

    Answer the following questions:
    1. This program throws an error. Why? (If you can't find it, try executing it).
        Variable b is not defined globally! It's a local variable.

    2. Remove the line that throws the error.
        Commented!

    3. What is printed to the console?
       trace is done at the end of this file!

    4. How many times is "f1" called?
        Three times. Because we have

    5. How many times is "f2" called?

    6. What value does the "a" parameter take in the first "f1" call?
        It's 8!

    7. What is the value of the "a" outer variable when "f1" is called for the first time?
        it's 8, too! Because it's defined globally!
 */

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
// console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}

/* Trace
  a | x | i | d | e | out
  6 | 2 | - | - | - | 2
  6 | 2 | - | - | - | 6
  7 | 2 | 0 | 4 | - | 4
  8 | 2 | 1 | 4 | 9 | 9
  9 | 2 | 2 | 6 | 9 | 6
  10| 2 | 3 | 6 | 13| 13
  11| 2 | 4 | 8 | 13| 8
  12| 2 | 5 | 8 | 17| -
*/

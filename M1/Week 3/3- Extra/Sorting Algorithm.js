/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method π

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function sortAges(arr) {
  const newArr = arr.filter((el) => typeof el === "number");

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] < newArr[j]) [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
  }

  return newArr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = ["πΉ", 100, "π©", 55, "π₯΅", "π", 45, "π", "Sanyia", 66, "James", 23, "π", "Ismeal"];
const agesCase2 = ["28", 100, 60, 55, "75", "π", "Elamin"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "βPASSED";
  } else {
    status = "βFAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("sortAges function works - case 1", arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100]));

test("sortAges function works - case 2", arraysEqual(sortAges(agesCase2), [55, 60, 100]));

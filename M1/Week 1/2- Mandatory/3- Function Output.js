// Add comments to explain what this function does. You're meant to use Google!
/**
 * @returns A random float number between 0 to 10 (but not 10 itself) => [0, 10)
 */
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
/**
 * @params Two strings
 * @returns another concatenate string (w1 + w2), without any spaces and with mentioned order
 */
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return `${firstWord} ${secondWord} ${thirdWord}`;
}

/* -------------------------- TESTS - DO NOT MODIFY ------------------------- */
// There are some Tests in this file that will help you work out if your code is working.


const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "✅PASSED";
  } else {
    status = `❌FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("concatenate function - case 1 works", concatenate("code", "your", "future"), "code your future");
test("concatenate function - case 2 works", concatenate("I", "like", "pizza"), "I like pizza");
test("concatenate function - case 3 works", concatenate("I", "am", 13), "I am 13");

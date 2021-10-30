/* EXERCISE 1 - Code Refactoring
 * This script functions as a library.
 * Its purpose is to provide a set of functions that users can use to manipulate and decorate text.
 *
 * Using the coding practices you have learnt (you can use the syllabus as reference),
 * edit the code so that it establishes good coding standards.
 *
 * There may be both syntax and logical errors present.
 */

// Function that reverses and capitalizes text
export function reverseAndCapitalize(text) {
  return text.toUpperCase().split("").reverse().join("");
}

// Function that returns text with every other letter capitalized
export function everyOtherLetterCapitalized(text) {
  return text
    .split("")
    .map((letter, index) => {
      return index % 2 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .join("");
}

export function lowerCase(text) {
  return text.toLowerCase();
}

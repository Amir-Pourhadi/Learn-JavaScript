/*

You have an object of mentors and their ages below, but the keys are inconsistent.
JOSH and JAMIE are uppercase, while james and Mozafar are not.
You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson,
and some other JavaScript methods to accomplish this task.

*/

const mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};

// ONLY EDIT BELOW THIS LINE

const mentorsNames = Object.keys(mentorsAges);

const mentorsNamedUppercase = mentorsNames.map((name) => name.toUpperCase());

// ONLY EDIT ABOVE THIS LINE

console.log(mentorsNamedUppercase);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]

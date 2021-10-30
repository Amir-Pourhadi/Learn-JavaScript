const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

for (const name in traineeGrades) {
  if (name !== "george") {
    console.log(`${name.toUpperCase()} - ${traineeGrades[name]}`);
  }
}

// => TOM - 20
// => ABDUL - 19

// Refactor this code to make appropriate use of `let` and `const`

function getCircleArea(radius) {
  const pi = Math.PI;
  const rSquared = Math.pow(radius, 2);

  return pi * rSquared;
}

function getCircleAreas(radiusArr) {
  const areasArr = [];

  for (const radius of radiusArr) {
    const circleArea = getCircleArea(radius);
    areasArr.push(circleArea);
  }

  return areasArr;
}

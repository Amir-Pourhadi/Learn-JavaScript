// Destructure this object
function destructureObj() {
  const rectangle = {
    colour: "red",
    height: "20",
    width: "40",
  };

  /* destructure here */
  const { colour, height, width } = rectangle;

  // Should show "red, 20, 40"
  console.log(`${colour}, ${height}, ${width}`);
}

// Destructure this object literal and map colour to variable a, height to b and width to c
function mapToVars() {
  const rectangle = {
    colour: "red",
    height: "20",
    width: "40",
  };

  /* destructure here */
  const { colour: a, height: b, width: c } = rectangle;

  // Should show "red, 20, 40"
  console.log(`${a}, ${b}, ${c}`);
}

// Only destructure the colour and width variables
function selectiveDestructure() {
  const rectangle = {
    colour: "red",
    height: "20",
    width: "40",
  };

  /* destructure here */
  const { colour, width } = rectangle;

  // Should show "red, 20, 40"
  console.log(`${colour}, ${width}`);
}

// Destructure this list
function destructureList() {
  const names = ["Alice", "Bob", "Charlie", "David"];

  /* destructure here */
  const [a, b, c, d] = names;

  // Should show "Alive, Bob, Charlie, David"
  console.log(`${a}, ${b}, ${c}, ${d}`);
}

destructureObj();
mapToVars();
selectiveDestructure();
destructureList();

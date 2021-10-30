const laptop = {
  brand: "Lenovo",
  screenSize: 13,
};

laptop["isTouchscreen"] = true;
laptop["colors"] = ["spaceGray", "black", "white"];
laptop.brand = "Apple";
laptop["owner"] = "me";

console.log(laptop);

/* {
  brand: 'Apple',
  screenSize: 13,
  isTouchscreen: true,
  colors: [ 'spaceGray', 'black', 'white' ],
  owner: 'me'
} */

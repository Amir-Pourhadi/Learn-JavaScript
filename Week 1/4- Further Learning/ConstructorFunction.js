// let's see "new" keyword:
// we can make a new XMLHttpRequest() => you will make a new object
// we can make a new Array
// we can make new String
// what is new? it is an operator

// have you ever noticed that, if we make a function, it won't be === with another functions??
// you can test it in factory function's black and first colour, but look at this:
// try this in your console:
// "hi".slice === "bye".slice  (don't execute the function)
// what is true? or false? remember that true means you have same reference!!!(as you must know it by now it is located under prototypes)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new   => did you noticed that this instance doesn't include return?

// This is a Constructor Function...
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();

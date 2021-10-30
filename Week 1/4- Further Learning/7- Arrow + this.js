const person = {
  firstName: "Donald",
  lastName: "Trump",
  fullName() {
    //SCOPE --Local

    // console.log(this); // this object
    return `${this.firstName} ${this.lastName}`;
  },
  hisName: () => {
    //SCOPE --Global

    // console.log(this); // window object
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName() {
    setTimeout(function () {
      // return this.fullName();
    }, 3000);
  },
  sayName() {
    setTimeout(() => {
      // console.log(this); // this object
      // console.log(this.fullName());
    }, 3000);
  },
};

// console.log(person.fullName()); // Donald Trump
// console.log(person.hisName()); // undefined undefined
// console.log(person.shoutName()); // undefined Error!
// person.sayName();

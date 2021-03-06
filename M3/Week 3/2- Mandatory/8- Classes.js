// Complete this class so that the cat class has properties:
// - gender
// - coat
// - age
//
// The class should have two methods:
// - greeting() - returns 'meow'
// - angry() - return 'hiss'

class Cat {
  constructor(gender, coat, age) {
    this.gender = gender;
    this.coat = coat;
    this.age = age;
  }
  greeting() {
    return "meow";
  }
  angry() {
    return "hiss";
  }
}

/* DO NOT EDIT BELOW THIS LINE */

const myCat = new Cat("male", "tabby", 3);

// Expected output: 'male'
console.log(myCat.gender);

// Expected output: 'tabby'
console.log(myCat.coat);

// Expected output: '3'
console.log(myCat.age);

// Expected output: 'meow'
console.log(myCat.greeting());

// Expected output: 'hiss'
console.log(myCat.angry());

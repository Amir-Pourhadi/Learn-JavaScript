const kitten1 = {
  name: "Fluffy",
  weeksOld: 2,
};

const kitten2 = {
  name: "Megatron",
  weeksOld: 1,
};

const kitten3 = {
  name: "Billy",
  weeksOld: 5,
};

const kittens = [kitten1, kitten2, kitten3];

console.log(kittens);
/* Output ==> [
	{ name: "Fluffy", weeksOld: 2 },
	{ name: "Megatron", weeksOld: 1 },
	{ name: "Billy", weeksOld: 5 },
]; */

console.log(kittens[1].name); // Megatron

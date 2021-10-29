// Correct this function so that it is using ES6 default parameter syntax
function feedCat(type = "wet", amount = 1) {
  return `Okay, I will feed your cat ${amount} packets of ${type} food!`;
}

// What is wrong with this function?
function binCollection(address, collect_day = "Thursday", time = "morning") {
  return `Your bins will be collected on ${collect_day} ${time} from ${address}!`;
}

console.log(feedCat());
console.log(binCollection("Iran"));

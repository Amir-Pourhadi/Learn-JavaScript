/**
 * John and Mike both play basketball in different teams.
 * in the latest 3 games, John's team scored 89, 120 and 103 points,
 * while Mike's team scored 116, 94 and 123 points.
 * 1) Calculate the average score for each team.
 * 2) Decide which teams wins in average (highest average score), and print the winner
 *      to the console. also include the average score in the output.
 * 3) Then change the scores to show different winners . don't forget to take into
 *      account there might be a draw (the same average score)
 * 4) EXTRA : Mary also plays basketball , and her team scored 97 , 134 and 105 points.
 *      like before , log the average winner to the console. Hint: you will need the && operator to
 *      take the decision .
 * 5) Change the scores to generate different winners , keeping in mind there might be draws.
 * Gook Luck :D
 * */

class Scores {
  constructor(scoreArray, name) {
    this.averageScore = this.findAverageScore(scoreArray);
    this.name = name;
  }

  findAverageScore(scoreArray) {
    const sum = scoreArray.reduce((acc, val) => acc + val);
    const len = scoreArray.length;
    return Math.round((sum / len) * 100) / 100;
  }
}

const john = new Scores([116, 94, 123], "John");
const mike = new Scores([84, 120, 103], "Mike");
const mary = new Scores([97, 134, 105], "Mary");

const challengers = [john, mike, mary];

const averageScores = challengers.map((person) => person.averageScore);
const maxScore = Math.max(...averageScores);

const winners = challengers.filter((person) => person.averageScore === maxScore);

if (winners.length > 1) {
  console.log(`We have ${winners.length} Winners with average score of ${maxScore}!`);
  winners.forEach((winner, index) => console.log(`Winner #${index + 1} is ${winner.name}!\n`));
} else console.log(`We have a winner!\n${winners[0].name} wins with average score of ${winners[0].averageScore}\n`);

/**
 * John and his family went on a holiday and went to 3 different restaurants. the bills were $124 ,
 *  $48 and $268 .
 * to tip the waiter a fair amount , John created a simple tip calculator (as a function).
 *  He likes to tip %20 of the bill when the bill is less than $50 , 15% when the bill is between
 *   $50 and $200 , and 10% if the bill is more than $200.
 * In the end. John would like to have 2 arrays :
 * 1) Containing all three tips (one for each bill)
 * 2) Containing all three final paid amounts (bill + tip)
 *      Good Luck XD
 */

function tipCalculator(...bills) {
  const billsArray = bills.map((bill) => +bill.slice(1));
  const tipArray = billsArray.map((bill) => {
    if (bill < 50) bill *= 0.2;
    else if (bill < 200) bill *= 0.15;
    else bill *= 0.1;
    return "$" + Math.round(bill * 100) / 100;
  });
  const finalArray = billsArray.map((bill, index) => {
    bill += +tipArray[index].slice(1);
    return "$" + bill;
  });

  console.log(bills);
  console.log(tipArray);
  console.log(finalArray);
}

tipCalculator("$124", "$48", "$268");

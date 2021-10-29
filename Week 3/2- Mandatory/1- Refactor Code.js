// Refactor the following code using the good coding practices discussed
//
// Add comments where you believe the code could be improved
//
// Make sure to consider if it has/is
// - Good naming
// - Good commenting
// - Clear logic
// - Concise
// - Good formatting
// - DRY
// - Single responsibility
// - Avoiding unnecessary specific number

function myFunction(salary, taxCode, incomeTax1, incomeTax2) {
  const totalIncomeTax = incomeTax1 + incomeTax2;
  const studentLoan = (salary - 17775) * 0.09;
  const originalSalary = salary;
  let multiplier;

  if (taxCode === "1150L") {
    multiplier = 0.1;
  } else if (taxCode === "ST") {
    multiplier = 0.05;
  } else {
    multiplier = 0.08;
  }

  const nationalInsurance = salary * multiplier;
  salary -= [nationalInsurance, totalIncomeTax, studentLoan].reduce((acc, val) => acc + val);

  return `Your gross income is ${originalSalary} and your net income is ${salary}.`;
}

console.log(myFunction(28000, "1150L", 1000, 580));

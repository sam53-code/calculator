//declaring initial values

let num1 = "";
let num2 = "";
let operator = "";
let awaitingNum2 = false;

// console.log(getValues(num1, operator, num2));

function calculate(num1, operator, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "Invalid input";
  }

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return "";
      return a / b;
    default:
      return "Error";
  }
}

console.log(calculate("9", "+", "7"));
console.log(calculate("9", "-", "7"));
console.log(calculate("9", "/", "7"));
console.log(calculate("9", "*", "7"));

//event delegation using switch and dataset

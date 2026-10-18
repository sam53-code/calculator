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

const input = document.querySelector(".display");
const calculatorGrid = document.querySelector(".calculator");

calculatorGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");

  if (!btn) return;

  const action = btn.dataset.action;
  const value = btn.dataset.value;

  switch (action) {
    case "number":
      if (awaitingNum2 || num1 === "0") {
        input.value = value;
        awaitingNum2 = false;
      } else {
        input.value += value;
      }

      break;

    case "operator":
      if (input.value === "" || input.value === "Error") return;

      if (num1 !== "" && operator !== "" && !awaitingNum2) {
        num2 = input.value;
        const result = calculate(num1, operator, num2);

        if (typeof result !== "number" || !Number.isFinite(result)) {
          input.value = "Error";
          num1 = "";
          num2 = "";
          operator = "";
          awaitingNum2 = true;
          return;
        }

        input.value = String(result);
        num1 = String(result);
      } else {
        num1 = input.value;
      }
      operator = value;
      num2 = "";
      awaitingNum2 = true;

      break;

    case "decimals":
      if (awaitingNum2) {
        input.value = "0.";
        awaitingNum2 = false;
      } else if (!input.value.includes(".")) {
        input.value += input.value === "" ? "0." : ".";
      }

      break;

    case "delete":
      if (awaitingNum2) {
        input.value = input.value.slice(0, -1);
      }
      break;

    case "clear":
      input.value = "";
      num1 = "";
      num2 = "";
      operator = "";
      awaitingNum2 = false;

      break;
  }
});

// Declare variables for input elements, button, and result display
let firstInput = document.getElementById("first");
let secondInput = document.getElementById("second");
let thirdInput = document.getElementById("third");
let resultSpan = document.getElementById("result");
let button = document.getElementById("calculateBtn");

function calculateMax() {
  let num1 = firstInput.valueAsNumber;
  let num2 = secondInput.valueAsNumber;
  let num3 = thirdInput.valueAsNumber;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultSpan.innerHTML = "Please enter all three numbers.";
    return;
  }

  let maxValue = num1; 
  if (num2 > maxValue) {
    maxValue = num2;
  }

  if (num3 > maxValue) {
    maxValue = num3;
  }

  resultSpan.innerHTML = maxValue;
}

button.addEventListener("click", calculateMax);
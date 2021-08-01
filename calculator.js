"use strict";
const display = document.querySelector(".display");
const numpad = document.querySelectorAll(".num");
const decimal = document.querySelector(".decimal");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const alternateSign = document.querySelector(".plus-minus");

let hasTyped = false;

function getValue() {
  return Number(display.textContent);
}

// initial state
let value1 = 0,
  value2 = 0,
  result;
let operation = null;

// event listener to update display with numbers. Need to update this to account for using a limit of one decimal
numpad.forEach((num) =>
  num.addEventListener("click", () => {
    if (!hasTyped) {
      display.textContent = num.textContent;
      hasTyped = true;
    } else if (display.textContent.length < 9) {
      display.textContent += num.textContent;
    }
  })
);

// treat decimal separately to avoid multiple decimals in display
decimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});

// Operation functions
function addition(a, b) {
  return Number(a) + Number(b);
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  if (b == 0) {
    return `error`;
  }
  return a / b;
}
function operate(a, b, operator) {
  switch (operator) {
    case "addition":
      result = addition(a, b);
      break;
    case "subtraction":
      result = subtraction(a, b);
      break;
    case "multiplication":
      result = multiplication(a, b);
      break;
    case "division":
      result = division(a, b);
      break;
  }
}

// click events for operators & +/-

// addition
add.addEventListener("click", () => {
  checkOperation();

  operation = "addition";
  hasTyped = false;
});
// subtraction
subtract.addEventListener("click", () => {
  checkOperation();

  operation = "subtraction";
  hasTyped = false;
});
// multiplication
multiply.addEventListener("click", () => {
  checkOperation();
  operation = "multiplication";
  hasTyped = false;
});
// division
divide.addEventListener("click", () => {
  checkOperation();
  operation = "division";
  hasTyped = false;
});
// equals
equals.addEventListener("click", () => {
  if (operation == null) {
    // do nothing
  } else {
    value2 = getValue();
    operate(value1, value2, operation);
    value1 = result;
    if (String(result).length > 9 && String(result).includes(".")) {
      result = shorten(result);
    } else if (String(result).length > 9) {
      // do something with big numbers!!!!!
      result = Number(result).toExponential(4);
    }
    display.textContent = result;
  }
  operation = null;
});

// +/- toggle
alternateSign.addEventListener("click", () => {
  display.textContent = Number(display.textContent) * -1;
});

// clear function
clear.addEventListener("click", () => {
  value1 = 0;
  value2 = 0;
  result = 0;
  operation = null;
  display.textContent = "0";
  hasTyped = false;
});

function shorten(value) {
  // return value with digit length of 9
  return Number(String(value).slice(0, 9));
}

function checkOperation() {
  if (operation == null) {
    value1 = getValue();
  } else {
    value2 = getValue();
    operate(value1, value2, operation); // update result value
    value1 = result;
    if (String(result).length > 9 && result.includes(".")) {
      result = shorten(result);
    }
    display.textContent = result;
  }
}

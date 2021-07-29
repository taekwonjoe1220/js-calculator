"use strict";
const display = document.querySelector(".display");
const numpad = document.querySelectorAll(".num");
const decimal = document.querySelector(".decimal");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const equals = document.querySelector(".equals");

function getValue() {
  return Number(display.textContent);
}

// initial state
let value1 = 0,
  value2 = 0;
let operation = null;

// event listener to update display with numbers. Need to update this to account for using a limit of one decimal
numpad.forEach((num) =>
  num.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = num.textContent;
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
  return a + b;
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
  return operator(a, b);
}

// click events for operators

// divide.addEventListener("click", () => {
//   operation = "division";
// });

// multiply.addEventListener("click", () => {
//   operation = "multiplication";
// });

add.addEventListener("click", () => {
  // operation = "test";
  if (operation == null) {
    operation = "addition";
    value1 = getValue();
  } else {
    value2 = getValue();
  }

  //   // console.log(operate(value1, value2, operator));
  // }
});
// subtract.addEventListener("click", () => {
//   operation = "subtraction";
// });
// Inside event listener, store current display #, store operator name (check if operator active or null)

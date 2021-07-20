const display = document.querySelector(".display");
const numpad = document.querySelectorAll(".num");
const decimal = document.querySelector(".decimal");
let value = 0;

// event listener to update display with numbers. Need to update this to account for using a limit of one decimal
numpad.forEach((num) =>
  num.addEventListener("click", () => {
    if (num.classList.contains("decimal")) {
      return;
    }
    if (display.textContent === "0") {
      display.textContent = num.textContent;
    } else if (display.textContent.length >= 9) {
      // do nothing to display
    } else {
      display.textContent += num.textContent;
    }
    value = Number(display.textContent);
  })
);
decimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});

// Operation functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) {
    return `error (div. by zero)`;
  }
  return a / b;
}
function operate(a, b, operator) {
  return operator(a, b);
}

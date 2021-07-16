const display = document.querySelector(".display");
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
  return a / b;
}

function operate(a, b, operator) {
  return operator(a, b);
}

const numpad = document.querySelectorAll(".num");

// event listener to update display with numbers. Need to update this to account for using a limit of one decimal
numpad.forEach((num) =>
  num.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = num.textContent;
    } else if (
      display.textContent.length === 10 &&
      display.textContent.includes(".")
    ) {
      return;
    } else {
      display.textContent += num.textContent;
    }
  })
);

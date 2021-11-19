// is equal pressed
let equal_pressed = false;
// references
let input_buttons = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

// when application loads on screen
window.onload = () => {
  input.value = "";
};

// function to know if equeal is pressed
const isEqualPressed = (_) => equal_pressed;

// function to toggle equal_pressed value
const toggleEqualPressed = (_) => {
  equal_pressed = !equal_pressed;
};

// function to set equal_pressed value
const setEqualPressed = (value) => {
  if (typeof value === "boolean") equal_pressed = value;
};

// function to do when pressed an input button
const onInputButtonPressed = (inputButton) => {
  return (_) => {
    if (isEqualPressed()) {
      input.value = "";
      setEqualPressed(false);
    }
    input.value += inputButton?.value;
  };
};

// function to solve input
const solveInput = (_) => {
  setEqualPressed(true);
  let operation = input.value;
  try {
    // evaluate user's input
    let solution = eval(operation);

    // true for natural numbers, false for decimals
    if (Number.isInteger(solution)) input.value = solution;
    else input.value = solution.toFixed(2);
  } catch (error) {
    // if invalid input
    alert("Invalid input");
  }
};

// function to clear whole input
const clearAll = (_) => {
  input.value = "";
};

// function to clear single digit
const clearDigit = (_) => {
  input.value = input.value.substr(0, input.value.length - 1);
};

// add listener to every input button
input_buttons.forEach((inputButton) => {
  inputButton.addEventListener("click", onInputButtonPressed(inputButton));
});

// add listener to clear buttons
clear.addEventListener("click", clearAll);
erase.addEventListener("click", clearDigit);

// solve when clicking equal button
equal.addEventListener("click", solveInput);

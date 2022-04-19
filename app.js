function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function equal() {
  if ((lastOperation = "digit")) {
    if (!storage.secondNumber) {
      storage.secondNumber = Number(screenString);
      storage.result = operate(
        storage.firstNumber,
        storage.secondNumber,
        storage.operation
      );
      screenString = "";
      display(storage.result);
      storage.firstNumber = storage.result;
      delete storage.secondNumber;
    }
  }
}

function operate(a, b, operation) {
  return operation(a, b);
}

function display(a) {
  screenString += a;
  screen.innerText = screenString;
}

function check() {
  if (lastOperation !== "digit") {
    screenString = "";
  }
  lastOperation = "digit";
}

let screenString = "";
let storage = {};
let lastEntryIsOperation = false;
let lastOperation = "";
const screen = document.querySelector("#screen");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const addition = document.querySelector("#addition");
const equals = document.querySelector("#equals");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const sign = document.querySelector("#sign");
const clear = document.querySelector("#clear");

one.addEventListener("click", () => {
  check();
  display(one.innerText);
});

two.addEventListener("click", () => {
  check();
  display(two.innerText);
});

three.addEventListener("click", () => {
  check();
  display(three.innerText);
});

four.addEventListener("click", () => {
  check();
  display(four.innerText);
});

five.addEventListener("click", () => {
  check();
  display(five.innerText);
});

six.addEventListener("click", () => {
  check();
  display(six.innerText);
});

seven.addEventListener("click", () => {
  check();
  display(seven.innerText);
});

eight.addEventListener("click", () => {
  check();
  display(eight.innerText);
});

nine.addEventListener("click", () => {
  check();
  display(nine.innerText);
});

zero.addEventListener("click", () => {
  check();
  display(zero.innerText);
});

decimal.addEventListener("click", () => {
  check();
  display(decimal.innerText);
});

equals.addEventListener("click", () => {
  if (lastOperation !== "operation") {
    equal();
    delete storage.firstNumber;
    lastOperation = "operation";
  }
});

addition.addEventListener("click", () => {
  if (lastOperation !== "operation" || storage.result) {
    if (!storage.firstNumber) {
      storage.firstNumber = Number(screenString);
      storage.operation = add;
    } else {
      if (storage.result) storage.operation = add;
      equal();
      storage.operation = add;
    }
  }
  lastOperation = "operation";
  delete storage.result;
});

division.addEventListener("click", () => {
  if (lastOperation !== "operation" || storage.result) {
    if (!storage.firstNumber) {
      storage.firstNumber = Number(screenString);
      storage.operation = divide;
    } else {
      if (storage.result) storage.operation = divide;
      equal();
      storage.operation = divide;
    }
  }
  lastOperation = "operation";
  delete storage.result;
});

multiplication.addEventListener("click", () => {
  if (lastOperation !== "operation" || storage.result) {
    if (!storage.firstNumber) {
      storage.firstNumber = Number(screenString);
      storage.operation = multiply;
    } else {
      if (storage.result) storage.operation = multiply;
      equal();
      storage.operation = multiply;
    }
  }
  lastOperation = "operation";
  delete storage.result;
});

subtraction.addEventListener("click", () => {
  if (lastOperation !== "operation" || storage.result) {
    if (!storage.firstNumber) {
      storage.firstNumber = Number(screenString);
      storage.operation = subtract;
    } else {
      if (storage.result) storage.operation = subtract;
      equal();
      storage.operation = subtract;
    }
  }
  lastOperation = "operation";
  delete storage.result;
});

sign.addEventListener("click", () => {
  screenString = screen.innerText * (-1);
  screen.innerText = screen.innerText * (-1); 
});

clear.addEventListener("click", () => {
  delete storage.firstNumber;
  delete storage.secondNumber;
  delete storage.operation;
  delete storage.result;
  screenString = "";
  screen.innerText = "0";
});
"use strict";

function greet(name) {
  console.log("This function is running");
  const out = `Hello, ${name}`;
  return out;
}

const result = greet("Alireza");
console.log(result);
console.log(greet("Sarah"));

function printer() {
  console.log("This function prints");
}

printer();
printer();

const out2 = function (a, b) {
  return a + b;
};

console.log(out2("Alireza", 5));

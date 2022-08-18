"use strict";

const out = function (a, b) {
  return a + b;
};

console.log(out("Alireza", 5));

// Arrow Function

const result = (a, b) => a + b;
console.log(result(2, 6));

const output = (name) => {
  const out2 = `Hello, ${name}`;
  return out2;
};

console.log(output("Alireza"));

"use strict";

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const cities = ["Tehran", "Shiraz", "Esfahan", "Tabriz"];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

for (let i = cities.length - 1; i >= 0; i--) {
  console.log(cities[i]);
}

const arr = [5, 1, 12, 19, -23];

let i = 0;
let min = arr[i];
while (i < arr.length) {
  i++;
  if (min < arr[i]) {
    min = arr[i];
  }
}

console.log(min);

/*
 * DAY 3 (I)
 *
 * What is the power consumption of the submarine? (Be sure to represent your answer
 * in decimal, not binary.)
 */

import entries from './input.js';

// Convert the string into an array with the split() method, creating an array of strings. As the entries are separated by a newline character, use its escape sequence to split the string.
let entriesArr = entries.split('\n');

const gamma = [];
const epsilon = [];

const countReps = function (arr) {
  let zeros = [];
  let ones = [];
  for (let j = 0; j < arr[0].length; j++) {
    for (let element of arr) {
      const bit = element[j];
      bit === '0' ? zeros.push(bit) : ones.push(bit);
    }
    zeros.length > ones.length ? gamma.push(0) : gamma.push(1);
    zeros = [];
    ones = [];
  }
};

countReps(entriesArr);

for (let element of gamma) {
  element === 0 ? epsilon.push(1) : epsilon.push(0);
}

const powerConsumption =
  parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
console.log(powerConsumption); // 4006064 (1616 * 2479)

/*
 * DAY 3 (II)
 * Use the binary numbers in your diagnostic report to calculate the oxygen generator
 * rating and CO2 scrubber rating, then multiply them together. What is the life
 * support rating of the submarine? (Be sure to represent your answer in decimal, not
 * binary.)
 */

const countOx = function (arr) {
  let oxygen = arr;
  for (let j = 0; j < arr[0].length; j++) {
    let counter = oxygen.filter(element => element[j] === '1');
    if (counter.length >= oxygen.length / 2) {
      oxygen = oxygen.filter(element => element[j] === '1');
    } else {
      oxygen = oxygen.filter(element => element[j] === '0');
    }
  }
  return oxygen;
};

const countCo2 = function (arr) {
  let co2 = arr;
  for (let j = 0; j < arr[0].length; j++) {
    let counter = co2.filter(element => element[j] === '0');
    if (counter.length <= co2.length / 2) {
      co2 = co2.filter(element => element[j] === '0');
    } else {
      co2 = co2.filter(element => element[j] === '1');
    }
    if (co2.length === 1) break;
  }
  return co2;
};

console.log(
  parseInt(countOx(entriesArr), 2) * parseInt(countCo2(entriesArr), 2)
); // 5941884 (1599 * 3716)

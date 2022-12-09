'use strict';

/*
DAY 3 (I)
Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
 */

import data from './input.js';

const rucksacks = data.split('\n');

// Divide rucksacks into two compartments of the same length
const compartments = [];
rucksacks.forEach((el, index) => {
  let middle = el.length / 2;
  compartments[index] = [el.slice(0, middle), el.slice(middle)];
});

function priorityCalc(char) {
  // Check if character is uppercase
  if (char === char.toUpperCase()) {
    // charCodeAt returns the Unicode of the character specified
    return char.charCodeAt() - 38; // 'A' Unicode dec. = 65 ('A' priority = 27)
  } else {
    return char.charCodeAt() - 96; // 'a' Unicode dec. = 97 ('a' priority = 1)
  }
}

const repeatedItems = function (compartments) {
  let repeated = [];
  for (let compartment of compartments) {
    for (let letter0 of compartment[0]) {
      if (compartment[1].includes(letter0)) {
        repeated.push(letter0);
        break;
      }
    }
  }
  return repeated;
};

const priorities = repeatedItems(compartments).map(el => {
  return priorityCalc(el);
});

const prioritiesSum = priorities.reduce((a, b) => a + b, 0);

console.log(prioritiesSum); // 8088 (Test: 157)

/*
DAY 3 (II)
 */

console.log(rucksacks);

const groups = [];
groups.push([rucksacks[0], rucksacks[1], rucksacks[2]]);

console.log(groups);

const badge = function (arr) {};

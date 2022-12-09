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

function prioritySum(compartments) {
  // Find out the repeated character within two/three strings
  let repeated = [];
  for (let compartment of compartments) {
    for (let letter0 of compartment[0]) {
      // Check if there are two compartments (Part I) or three (Part II)
      if (!compartment[2]) {
        if (compartment[1].includes(letter0)) {
          repeated.push(letter0);
          break;
        }
      } else {
        if (
          compartment[1].includes(letter0) &&
          compartment[2].includes(letter0)
        ) {
          repeated.push(letter0);
          break;
        }
      }
    }
  }

  // Convert the character (string) to priority (number)
  const priority = repeated.map(el => {
    if (el === el.toUpperCase()) {
      // charCodeAt returns the Unicode of the character specified
      return el.charCodeAt() - 38; // 'A' Unicode dec. = 65 ('A' priority = 27)
    } else {
      return el.charCodeAt() - 96; // 'a' Unicode dec. = 97 ('a' priority = 1)
    }
  });

  return priority.reduce((a, b) => a + b, 0);
}

console.log(prioritySum(compartments)); // 8088 (Test: 157)

/*
DAY 3 (II)
 */

// Divide rucksacks into groups of three
const groups = [];
for (let i = 0; i < rucksacks.length; i++) {
  if (i % 3 === 0) {
    groups.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
  }
}

console.log(prioritySum(groups)); // 2522 (Test: 70)

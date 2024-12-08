'use strict';

/*
DAY 1 (I)
What is the total distance between your lists?
 */

import data from './input.js';

// Prepare lists
const list1 = [];
const list2 = [];

data
  .split('\n')
  .map(line => line.split(/\s+/).map(Number))
  .forEach(line => {
    list1.push(line[0]);
    list2.push(line[1]);
  });

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

// Calculate distance
const distance = list1.reduce((acc, x, i) => acc + Math.abs(x - list2[i]), 0);

console.log(distance); // 1579939 (Test: 11)

/*
DAY 1 (II)
Once again consider your left and right lists. What is their similarity score?
 */

function similarityScore(list1, list2) {
  let score = 0;
  list1.forEach(x => {
    list2.forEach(y => {
      if (x === y) {
        score += x;
      }
    });
  });

  return score;
}

console.log(similarityScore(list1, list2)); // 20351745 (Test: 31)

'use strict';

/*
DAY 1 (I)
Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
 */

import data from './input.js';

const caloriesBags = data
  .split('\n\n')
  .map(el => el.split('\n').reduce((a, b) => parseInt(a) + parseInt(b), 0))
  .sort((a, b) => b - a);

const maxCaloriesBag = caloriesBags[0];

console.log(maxCaloriesBag); // 68467 (Test: 24000)

/*
DAY 1 (II)
Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
 */

const top3Bags = caloriesBags.slice(0, 3).reduce((a, b) => a + b, 0);

console.log(top3Bags); // 203420 Too low (Test: 45000)

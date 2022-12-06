'use strict';

/*
DAY 2 (I)
What would your total score be if everything goes exactly according to your strategy guide?
 */

import data from './input.js';

const caloriesBags = data
  .split('\n\n')
  .map(el => el.split('\n').reduce((a, b) => parseInt(a) + parseInt(b), 0))
  .sort((a, b) => b - a);

const maxCaloriesBag = caloriesBags[0];

console.log(maxCaloriesBag); // (Test: 15)

/*
DAY 2 (II)
 */

const top3Bags = caloriesBags.slice(0, 3).reduce((a, b) => a + b, 0);

console.log(top3Bags); // 203420 Too low (Test: 45000)

'use strict';

/*
DAY 2 (I)
What is the sum of all of the calibration values?
 */

import data from './input.js';

const target = {
  red: 12,
  green: 13,
  blue: 14,
};

// Prepare data
const games = data
  .split('\n')
  .map(game => game.split(' ').slice(2).join(' '))
  .map(game => game.split('; '))
  .map(game => game.map(subset => subset.split(', ')));

function sumIDs() {
  let sum = 0;

  for (let [gameID, game] of games.entries()) {
    let subsetCount = 0;

    for (let subset of game) {
      let colorCount = 0;

      for (let item of subset) {
        const [number, color] = item.split(' ');
        if (Number(number) <= target[color]) colorCount++;
      }
      if (colorCount === subset.length) subsetCount++;
    }
    if (subsetCount === game.length) sum += gameID + 1;
  }
  console.log(sum);
}

sumIDs(); // 2268 (Test: 8)

/*
DAY 2 (II)
What is the sum of the power of these sets?
 */

// (Test: 2286)

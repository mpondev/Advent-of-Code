'use strict';

/*
DAY 4 (I)
How many points are they worth in total?
 */

import data from './input.js';

// Prepare data
const cards = data
  .split('\n')
  .map(card => card.slice(card.indexOf(':') + 2))
  .map(card => card.split(/\s+\|\s+/))
  .map(card => card.map(side => side.split(/\s+/)));

let points = 0;

for (let card of cards) {
  let matches = 0;

  for (let number of card[1]) {
    card[0].includes(number) && matches++;
  }

  matches === 1 && points++;
  matches > 1 && (points += Math.pow(2, matches - 1));
}

console.log(points); // 24706 (Test: 13)

/*
DAY 4 (II)
Including the original set of scratchcards, how many total scratchcards do you end up with?
 */

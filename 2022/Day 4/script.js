'use strict';

/*
DAY 4 (I)
In how many assignment pairs does one range fully contain the other?
 */

import data from './input.js';

const sections = data
  .split('\n')
  .map(el => el.split(',').map(el => el.split('-').map(el => parseInt(el))));

function checkRanges(sections) {
  let counter = 0;
  for (let section of sections) {
    if (
      (section[0][0] >= section[1][0] && section[0][1] <= section[1][1]) ||
      (section[0][0] <= section[1][0] && section[0][1] >= section[1][1])
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(checkRanges(sections)); // 540 (Test: 2)

/*
DAY 4 (II)
In how many assignment pairs do the ranges overlap?
 */
function checkRanges2(sections) {
  let counter = 0;
  for (let section of sections) {
    if (
      (section[0][0] <= section[1][0] && section[0][1] >= section[1][0]) ||
      (section[1][0] <= section[0][0] && section[1][1] >= section[0][0])
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(checkRanges2(sections)); // 872 (Test: 4)

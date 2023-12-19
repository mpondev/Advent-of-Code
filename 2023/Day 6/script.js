'use strict';

/*
DAY 6 (I)
Determine the number of ways you could beat the record in each race. What do you get if you multiply these numbers together?
 */

import data from './input.js';

const [time, recordDistance] = data
  .split('\n')
  .map(line => line.split(/\s+/))
  .map(line => line.slice(1))
  .map(line => line.map(num => Number(num)));

console.log(time, recordDistance);

function checkRecords(time, recordDistance) {
  let beatTimes = 0;
  for (let i = 0; i < time; i++) {
    (time - i) * i > recordDistance && beatTimes++;
  }
  return beatTimes;
}

const result = [];

for (let i = 0; i < time.length; i++) {
  result.push(checkRecords(time[i], recordDistance[i]));
}

console.log(result.reduce((a, b) => a * b)); // 512295 (Test: 288)

/*
DAY 6 (II)
How many ways can you beat the record in this one much longer race?
 */

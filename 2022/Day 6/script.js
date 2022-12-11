'use strict';

/*
DAY 6 (I)
How many characters need to be processed before the first start-of-packet marker is detected? (4 distinct characters)
 */

// import { test1, test2, test3, test4, test5 } from './inputTest.js';
import data from './input.js';

function findStart(str, distinctChar) {
  const datastream = str.split('');
  const temp = [];
  for (let i = 0; i < distinctChar; i++) {
    temp.push(datastream[`${i}`]);
  }
  let solution = distinctChar;
  for (let i = distinctChar; i < datastream.length; i++) {
    if (new Set(temp).size < distinctChar) {
      temp.shift();
      temp.push(datastream[i]);
      solution++;
    }
  }
  return solution;
}

console.log(findStart(data, 4)); // 1198 (Tests: 7 - 5 - 6 - 10 - 11)

/*
DAY 6 (II)
How many characters need to be processed before the first start-of-message marker is detected? (14 distinct characters)
 */

console.log(findStart(data, 14)); // 3120 (Tests: 19 - 23 - 23 - 29 - 26)

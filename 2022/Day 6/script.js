'use strict';

/*
DAY 6 (I)
How many characters need to be processed before the first start-of-packet marker is detected?
 */

import { test1, test2, test3, test4, test5 } from './inputTest.js';
import data from './input.js';

function findStart(str) {
  const datastream = str.split('');
  const temp = [datastream[0], datastream[1], datastream[2], datastream[3]];
  let solution = 4;
  for (let i = 4; i < datastream.length; i++) {
    if (new Set(temp).size < 4) {
      temp.shift();
      temp.push(datastream[i]);
      solution++;
    }
  }
  return solution;
}

console.log(findStart(data)); // 1198

console.log(findStart(test1)); // (Test: 7)
console.log(findStart(test2)); // (Test: 5)
console.log(findStart(test3)); // (Test: 6)
console.log(findStart(test4)); // (Test: 10)
console.log(findStart(test5)); // (Test: 11)

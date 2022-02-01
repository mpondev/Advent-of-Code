/*
 * DAY 1 (I)
 *
 * How many measurements are larger than the previous measurement?
 */

import entries from './input.js';

// Convert the string into an array with the split() method, creating an array of substrings. As the entries are separated by a newline character, use its escape sequence to split the string. Then convert strings to integers
let entriesArr = entries.split('\n').map(entry => parseInt(entry));

// Iterate over array
let counter = 0;
for (let i = 1; i < entriesArr.length; i++) {
  if (entriesArr[i] > entriesArr[i - 1]) {
    counter += 1;
  }
}

console.log(counter); // 1154

/*
 * DAY 1 (II)
 * Consider sums of a three-measurement sliding window. How many sums are larger
 * than the previous sum?
 */

counter = 0;
for (let i = 3; i < entriesArr.length; i++) {
  let sum1 = entriesArr[i] + entriesArr[i - 1] + entriesArr[i - 2];
  let sum2 = entriesArr[i - 1] + entriesArr[i - 2] + entriesArr[i - 3];
  if (sum1 > sum2) counter += 1;
}

console.log(counter); // 1127

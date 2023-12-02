'use strict';

/*
DAY 1 (I)
What is the sum of all of the calibration values?
 */

import data from './input.js';

const lineDigits = data.split('\n').map(line => line.match(/\d+/g));

const calibrationValues = lineDigits.map(
  line => (line[0][0] + line[line.length - 1].slice(-1)) * 1
);

const sum = calibrationValues.reduce((a, b) => a + b, 0);

console.log(sum); // 54605 (Test: 142)

/*
DAY 1 (II)
What is the sum of all of the calibration values?
 */

//  (Test: 281)

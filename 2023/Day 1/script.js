'use strict';

/*
DAY 1 (I)
What is the sum of all of the calibration values?
 */

import data from './input.js';

// Include first and last letter of the number to catch shared letters: oneight, eighthree...
const validDigits = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e',
};

const textNumbers = /one|two|three|four|five|six|seven|eight|nine/g;

function calibrationSum(textDigits) {
  // Prepare data
  const lineDigits = (
    !textDigits
      ? data
      : data
          .replace(textNumbers, x => validDigits[x])
          .replace(textNumbers, x => validDigits[x])
  )
    .split('\n')
    .map(line => line.match(/\d+/g));

  // Get first and last number of each line
  const calibrationValues = lineDigits.map(
    line => (line[0][0] + line[line.length - 1].slice(-1)) * 1
  );

  const sum = calibrationValues.reduce((a, b) => a + b, 0);
  console.log(sum);
}

calibrationSum(false); // 54605 (Test: 142)

/*
DAY 1 (II)
What is the sum of all of the calibration values?
 */

calibrationSum(true); // 55429 (Test: 281)

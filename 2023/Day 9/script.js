'use strict';

/*
DAY 9 (I)
What is the sum of these extrapolated values?
 */

import data from './inputTest.js';

// Prepare data
const histories = data
  .split('\n')
  .map(value => value.split(' ').map(el => Number(el)));

function getNextSequence(sequence) {
  return sequence.reduce((nextSequence, number, index, seq) => {
    index > 0 && nextSequence.push(number - seq[index - 1]);
    return nextSequence;
  }, []);
}

const allZeros = sequence => {
  return sequence.every(el => el === 0);
};

function getSequences(history) {
  const sequences = [[...history]];
  for (let sequence of sequences) {
    !allZeros(sequence) && sequences.push(getNextSequence(sequence));
  }
  return sequences;
}

function getValues(sequences, end) {
  if (end) {
    return sequences.reduceRight((prev, number) => prev + number.at(-1), 0);
  } else {
    return sequences.reduceRight((prev, number) => {
      prev = number[0] - prev;
      return prev;
    }, 0);
  }
}

function getSum(histories) {
  return histories.reduce(
    (prev, history) => prev + getValues(getSequences(history), true),
    0
  );
}

console.log(getSum(histories)); // 1806615041 (Test: 114)

/*
DAY 9 (II)
What is the sum of these extrapolated values?
 */

function getSumLeft(histories) {
  return histories.reduce(
    (prev, history) => prev + getValues(getSequences(history), false),
    0
  );
}

console.log(getSumLeft(histories)); // 1211 (Test: 2)

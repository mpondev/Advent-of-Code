'use strict';

/*
DAY 2 (I)
What would your total score be if everything goes exactly according to your strategy guide?
 */

import data from './input.js';

// A: Rock, B: Paper, C: Scissors
// X: Rock, Y: Paper, Z: Scissors

const rounds = data.split('\n').map(el => el.split(' '));

const [win, draw, lost] = [6, 3, 0];
const [rock, paper, scissors] = [1, 2, 3];

const getTotalScore = function (rounds) {
  let totalScore = 0;
  for (let round of rounds) {
    let score = 0;
    if (round[1] === 'X') {
      round[0] === 'A'
        ? (score += rock + draw)
        : round[0] === 'B'
        ? (score += rock + lost)
        : (score += rock + win);
    } else if (round[1] === 'Y') {
      round[0] === 'A'
        ? (score += paper + win)
        : round[0] === 'B'
        ? (score += paper + draw)
        : (score += paper + lost);
    } else if (round[1] === 'Z') {
      round[0] === 'A'
        ? (score += scissors + lost)
        : round[0] === 'B'
        ? (score += scissors + win)
        : (score += scissors + draw);
    }
    totalScore += score;
  }
  return totalScore;
};

console.log(`Total Score: ${getTotalScore(rounds)}`); // 10404 (Test: 15)

/*
DAY 2 (II)
Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
 */

// X: lose, Y: draw, Z: win

const getTotalScore2 = function (rounds) {
  let totalScore = 0;
  for (let round of rounds) {
    let score = 0;
    if (round[1] === 'X') {
      round[0] === 'A'
        ? (score += scissors + lost)
        : round[0] === 'B'
        ? (score += rock + lost)
        : (score += paper + lost);
    } else if (round[1] === 'Y') {
      round[0] === 'A'
        ? (score += rock + draw)
        : round[0] === 'B'
        ? (score += paper + draw)
        : (score += scissors + draw);
    } else if (round[1] === 'Z') {
      round[0] === 'A'
        ? (score += paper + win)
        : round[0] === 'B'
        ? (score += scissors + win)
        : (score += rock + win);
    }
    totalScore += score;
  }
  return totalScore;
};

console.log(`Total Score: ${getTotalScore2(rounds)}`); // 10334 (Test: 12)

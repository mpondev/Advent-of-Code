/*
DAY 4 (I)
To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
 */

import entries from './input.js';

// Get numbers and boards:
const entriesArr = entries.split('\n\n');
const drawNumbers = entriesArr.slice(0, 1);
const boards = entriesArr.slice(1).map(val => val.split('\n'));

boards.forEach(board => {
  for (let i = 0; i < board.length; i++) {
    board[i] = board[i]
      .trim()
      .split(' ')
      .filter(x => x !== '');
  }
});

// Get a number
// Check if drawn number is in boards
// Check rows
// Check columns

// Sum of all unmarked numbers on the board

// Multiply that sum by the number that was called when the board won

console.log(drawNumbers);
console.log(boards);
console.log(typeof boards[0]);
console.log(boards[0]);
console.log(boards[0][0]);
console.log(typeof boards[0][0]);
console.log(boards[0][1]);

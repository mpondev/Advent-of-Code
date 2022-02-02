/*
DAY 4 (I)
To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
 */

import entries from './input.js';

// Get numbers and boards
const entriesArr = entries.split('\n\n');
const numbers = entriesArr.slice(0, 1); // numbers to be drawn
const boards = entriesArr.slice(1).map(val => val.split('\n'));

// for (let i = 0; i < boards.length; i++) {
//   for (let array of boards[i]) {
//     array.split(' ');
//   }
// }

const getBoards = function (arr) {
  for (x of arr) {
    return {
      board: x,
    };
  }
};

// Get a number
// Check if drawn number is in boards
// Check rows
// Check columns

// Sum of all unmarked numbers on the board

// Multiply that sum by the number that was called when the board won

console.log(entriesArr);
console.log(numbers);
console.log(boards);

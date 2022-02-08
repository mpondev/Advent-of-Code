/*
DAY 4 (I)
To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
 */

import entries from './input.js';

// Get numbers and boards:
const entriesArr = entries.split('\n\n');
const drawNumbers = entriesArr.slice(0, 1).join().split(',');
const boards = entriesArr.slice(1).map(val => val.split('\n'));

boards.forEach(board => {
  for (let i = 0; i < board.length; i++) {
    board[i] = board[i]
      .trim()
      .split(' ')
      .filter(x => x !== '');
  }
});

// Check if drawn number is in boards

const checkBoard = function (board) {
  // Check rows
  for (let i = 0; i < board[i].length; i++) {
    let aciertos = board[i].filter(x => x === 'x').length;
    if (aciertos === board[i].length) {
      break;
    }
  }
  // Check columns
  for (let j = 0; j < board[i].length; j++) {}
};

// Get a number
for (let i = 0; i < drawNumbers.length; i++) {
  for (let j = 0; j < boards.length; j++) {
    checkBoard(boards[j]);
  }
}

// // Let has local scope
// let array = [1, 2, 3, 5, 2, 8, 9, 2]

// // Functional filter with an Arrow function
// array.filter(x => x === 2).length  // -> 3

// Sum of all unmarked numbers on the board

// Multiply that sum by the number that was called when the board won

console.log(typeof drawNumbers);
console.log(drawNumbers);
console.log(boards);
console.log(typeof boards[0]);
console.log(boards[0]);
console.log(boards[0][0]);
console.log(typeof boards[0][0]);
console.log(boards[0][1]);

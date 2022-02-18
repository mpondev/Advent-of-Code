/*
DAY 4 (I)
To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
 */

import data from './input.js';

// Get numbers and boards:
const dataArr = data.split('\n\n');
const drawNumbers = dataArr.slice(0, 1).join().split(',');
const boards = dataArr.slice(1).map(val => val.split('\n'));

boards.forEach(board => {
  for (let i = 0; i < board.length; i++) {
    board[i] = board[i]
      .trim()
      .split(' ')
      .filter(x => x !== '');
  }
});
for (let [index, letter] of boards.entries()) {
  console.log(letter);
}

/*
  [ boards  j
    [ board  k
      [ line ]  l
    ]
  ]
*/

function checkBingo(draw, cards) {
  const line = cards.entries();
  function checkBall() {}
  // Check if drawn numbers (one by one) are in boards
  for (const ball of draw) {
    // Pass through all boards (array), and in each board through all lines (array)
    checkBall();
  }
}

// const checkBoards = function (arrBoards) {
//   for (let board of arrBoards) {
//     checkNumber(board);
//   }
// };

// const checkNumber = function (arrBoard) {
//   for (let board of arrBoard) {
//     checkLine(board);
//   }
// };

// const checkLine = function (arrLine) {
//   for (let n = 0; n < arrLine.length; n++) {
//     if (arrLine[n] === drawNumbers[i]) arrLine[n] = 'x';
//   }
// };

function checkAll(numeroSorteo, boletos) {
  for (let i = 0; i < numeroSorteo.length; i++) {
    for (let j = 0; j < boletos.length; j++) {
      for (let k = 0; k < boletos[j].length; k++) {
        for (let l = 0; l < boletos[j][k].length; l++) {
          if (boletos[j][k][l] === numeroSorteo[i]) boletos[j][k][l] = 'x';
        }
      }
    }
  }
}
checkAll(drawNumbers, boards);
console.log(boards[0]);

// Check if drawn number is in boards

// const checkBoard = function (board) {
//   // Check rows
//   for (let i = 0; i < board[i].length; i++) {
//     let aciertos = board[i].filter(x => x === 'x').length;
//     if (aciertos === board[i].length) {
//       break;
//     }
//   }
//   // Check columns
//   for (let j = 0; j < board[i].length; j++) {}
// };

// // Get a number
// for (let i = 0; i < drawNumbers.length; i++) {
//   for (let j = 0; j < boards.length; j++) {
//     checkBoard(boards[j]);
//   }
// }

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

drawNumbers;
boards[0];

//checkBoards(boards);
boards[0];

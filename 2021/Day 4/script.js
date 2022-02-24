/*
DAY 4 (I)
Start by finding the sum of all unmarked numbers on that winning board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.

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

let gameOn = true;
let winner, coef, winnerBall;
let lll;

const checkBingo = function (ball, cartons) {
  for (let i = 0; i < ball.length; i++) {
    checkCartons(ball[i], cartons);
  }

  function checkCartons(ball, cartons) {
    for (let i = 0; i < cartons.length; i++) {
      checkWinningColumn(cartons[i]);
      checkCarton(ball, cartons[i]);
    }
  }

  function checkCarton(ball, carton) {
    if (gameOn) {
      for (let i = 0; i < carton.length; i++) {
        checkLine(ball, carton[i]);
      }
    } else {
      for (let i = 0; i < carton.length; i++) {
        for (let line of carton) {
          if (line.filter(x => x === 'x').length === 5) {
            winner = carton;
            winnerBall = ball;
          }
        }
      }
    }
  }

  // Function to check if there's a winning column and stop the game
  function checkWinningColumn(carton) {
    let cartonTemp = carton;
    cartonTemp = cartonTemp[0].map((_, colIndex) =>
      cartonTemp.map(row => row[colIndex])
    );
    for (let i = 0; i < cartonTemp.length; i++) {
      checkWinningLine(cartonTemp[i]);
    }
  }

  // Function to check if there's a winning line and stop the game
  function checkWinningLine(line) {
    if (line.filter(x => x === 'x').length === 5) {
      gameOn = false;
    }
  }

  // Function to check lines looking for the drawn number
  function checkLine(ball, line) {
    if (gameOn) {
      for (let i = 0; i < line.length; i++) {
        if (ball === line[i]) {
          line[i] = 'x';
        }
      }
      checkWinningLine(line);
    }
  }

  console.log(lll);
  console.log(winner);
  console.log(cartons.indexOf(lll));
};

checkBingo(drawNumbers, boards);

const result = winner.map(arr => arr.filter(x => x !== 'x'));
for (let i = 0; i < result.length; i++) {
  for (let j = 0; j < result[i].length; j++) {
    result[i][j] = parseInt(result[i][j]);
  }
  result[i] = result[i].reduce((x, y) => x + y, 0);
}
coef = result.reduce((x, y) => x + y, 0);

console.log(coef);
console.log(winnerBall);
console.log(coef * winnerBall); // 76707 (947 * 81) (Wrong because checkColumns missing)

// // Let has local scope
// let array = [1, 2, 3, 5, 2, 8, 9, 2]

// // Functional filter with an Arrow function
// array.filter(x => x === 2).length  // -> 3

// Sum of all unmarked numbers on the board

// Multiply that sum by the number that was called when the board won

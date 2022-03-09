/*
DAY 4 (I)
Start by finding the sum of all unmarked numbers on that winning board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.

To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
 */

import data from './input.js';

// Get and format numbers and boards:
const dataArr = data.split('\n\n');
const drawNumbers = dataArr
  .slice(0, 1)
  .join()
  .split(',')
  .map(x => parseInt(x));
const boards = dataArr.slice(1).map(val => val.split('\n'));

boards.forEach(board => {
  for (let i = 0; i < board.length; i++) {
    board[i] = board[i]
      .trim()
      .split(' ')
      .filter(x => x !== '')
      .map(x => parseInt(x));
  }
});

let gameOn = true;
let winner, winnerBall, boardSum;

const checkBingo = function (balls, cartons) {
  for (const ball of balls) {
    if (gameOn) {
      for (let j = 0; j < cartons.length; j++) {
        for (let k = 0; k < cartons[j].length; k++) {
          for (let l = 0; l < cartons[j][k].length; l++) {
            if (ball === cartons[j][k][l]) {
              cartons[j][k][l] = 'x';
            }
          }
        }
      }
      winnerBall = ball;
    }
    for (let m = 0; m < cartons.length; m++) {
      for (let n = 0; n < cartons[m].length; n++) {
        if (cartons[m][n].every(x => x === 'x')) {
          winner = cartons[m];
          gameOn = false;
        }
      }
    }
    for (let p = 0; p < cartons.length; p++) {
      for (let q = 0; q < cartons[p].length; q++) {
        if (
          cartons[p][0][q] === 'x' &&
          cartons[p][1][q] === 'x' &&
          cartons[p][2][q] === 'x' &&
          cartons[p][3][q] === 'x' &&
          cartons[p][4][q] === 'x'
        ) {
          winner = cartons[m];
          gameOn = false;
        }
      }
    }
  }
  winnerScore(winner);
};

checkBingo(drawNumbers, boards);

function winnerScore(carton) {
  boardSum = winner.map(arr => arr.filter(x => x !== 'x'));
  for (let i = 0; i < boardSum.length; i++) {
    boardSum[i] = boardSum[i].reduce((x, y) => x + y, 0);
  }
  boardSum = boardSum.reduce((x, y) => x + y, 0);
}

console.log(
  `Part I. Winner score: ${boardSum * winnerBall} (${boardSum} * ${winnerBall})`
); // 41668 (947 * 44)

/*
DAY 4 (II)
Figure out which board will win last. Once it wins, what would its final score be?
 */

const checkLastBingo = function (balls, cartons) {
  for (const ball of balls) {
    for (let j = 0; j < cartons.length; j++) {
      for (let k = 0; k < cartons[j].length; k++) {
        for (let l = 0; l < cartons[j][k].length; l++) {
          if (ball === cartons[j][k][l]) {
            cartons[j][k][l] = 'x';
          }
        }
      }
    }
    for (let i = 0; i < cartons.length; i++) {
      if (cartons[i] !== 'X') {
        winnerBall = ball;
        for (let j = 0; j < cartons[i].length; j++) {
          if (cartons[i][j].every(x => x === 'x')) {
            winner = cartons[i];
            cartons[i] = 'X';
          }
        }
        for (let p = 0; p < cartons.length; p++) {
          for (let q = 0; q < cartons[p].length; q++) {
            if (
              cartons[p][0][q] === 'x' &&
              cartons[p][1][q] === 'x' &&
              cartons[p][2][q] === 'x' &&
              cartons[p][3][q] === 'x' &&
              cartons[p][4][q] === 'x'
            ) {
              winner = cartons[p];
              cartons[p] = 'X';
            }
          }
        }
      }
    }
  }
  winnerScore(winner);
};

checkLastBingo(drawNumbers, boards);

console.log(
  `Part II. Winner score: ${
    boardSum * winnerBall
  } (${boardSum} * ${winnerBall})`
); // 10478 (338 * 31)

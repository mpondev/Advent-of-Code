/*
DAY 4 (I)
Start by finding the sum of all unmarked numbers on that winning board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.

To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
 */

import data from './input.js';

// Get numbers and boards:
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
let winner, winnerBall;

const checkBingo = function (ball, cartons) {
  for (let i = 0; i < ball.length; i++) {
    if (gameOn) {
      for (let j = 0; j < cartons.length; j++) {
        for (let k = 0; k < cartons[j].length; k++) {
          for (let l = 0; l < cartons[j][k].length; l++) {
            if (ball[i] === cartons[j][k][l]) {
              cartons[j][k][l] = 'x';
            }
          }
        }
      }
      winnerBall = ball[i];
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
      if (
        cartons[0][p] === 'x' &&
        cartons[1][p] === 'x' &&
        cartons[2][p] === 'x' &&
        cartons[3][p] === 'x' &&
        cartons[4][p] === 'x'
      ) {
        winner = cartons[m];
        gameOn = false;
      }
    }
  }
};

checkBingo(drawNumbers, boards);

let boardSum = winner.map(arr => arr.filter(x => x !== 'x'));
for (let i = 0; i < boardSum.length; i++) {
  boardSum[i] = boardSum[i].reduce((x, y) => x + y, 0);
}
boardSum = boardSum.reduce((x, y) => x + y, 0);

console.log(boardSum);
console.log(winnerBall);
console.log(boardSum * winnerBall); // 41668 (947 * 44)

// // Get numbers and boards:
// const dataArr = data.split('\n\n');
// const drawNumbers = dataArr
//   .slice(0, 1)
//   .join()
//   .split(',')
//   .map(x => parseInt(x));
// const boards = dataArr.slice(1).map(val => val.split('\n'));

// boards.forEach(board => {
//   for (let i = 0; i < board.length; i++) {
//     board[i] = board[i]
//       .trim()
//       .split(' ')
//       .filter(x => x !== '')
//       .map(x => parseInt(x));
//   }
// });

// let gameOn = true;
// let winner, winnerBall;

// const checkBingo = function (ball, cartons) {
//   for (let i = 0; i < ball.length; i++) {
//     if (gameOn) {
//       checkCartons(ball[i], cartons);
//     }
//   }

//   function checkCartons(ball, cartons) {
//     for (let i = 0; i < cartons.length; i++) {
//       checkCarton(ball, cartons[i]);
//     }
//   }

//   function checkCarton(ball, carton) {
//     for (let i = 0; i < carton.length; i++) {
//       checkLine(ball, carton[i]);
//       if (!gameOn) {
//         for (let line of carton) {
//           if (line.filter(x => x === 'x').length === 5) {
//             winner = carton;
//             winnerBall = ball;
//           }
//         }
//       }
//       checkWinningCol(carton[i]);
//     }
//   }

//   // Function to check lines looking for the drawn number
//   function checkLine(ball, line) {
//     for (let i = 0; i < line.length; i++) {
//       if (ball === line[i]) {
//         line[i] = 'x';
//       }
//     }
//     checkWinningLine(line);
//   }

//   // Function to check if there's a winning line and stop the game
//   function checkWinningLine(line) {
//     if (line.every(x => x === 'x')) {
//       gameOn = false;
//     }
//   }

//   // Function to check if there's a winning column and stop the game
//   function checkWinningCol(carton) {
//     for (let i = 0; i < 5; i++) {
//       if (
//         carton[0][i] === 'x' &&
//         carton[1][i] === 'x' &&
//         carton[2][i] === 'x' &&
//         carton[3][i] === 'x' &&
//         carton[4][i] === 'x'
//       ) {
//         gameOn = false;
//       }
//     }
//   }
// };

// checkBingo(drawNumbers, boards);

// // Calculate the sum of the unmarked numbers on the winning board
// let boardSum = winner.map(arr => arr.filter(x => x !== 'x'));
// for (let i = 0; i < boardSum.length; i++) {
//   boardSum[i] = boardSum[i].reduce((x, y) => x + y, 0);
// }
// boardSum = boardSum.reduce((x, y) => x + y, 0);

// console.log(boardSum);
// console.log(winnerBall);
// console.log(boardSum * winnerBall); // 41668 (947 * 44)
// console.log(boards);

/*
DAY 4 (II)
Figure out which board will win last. Once it wins, what would its final score be?
 */

// let game2On = true;
// let winnerBoards = [];

// const checkLastBingo = function (ball, cartons) {
//   for (let i = drawNumbers.indexOf(winnerBall); i < ball.length; i++) {
//     // deleteWinningBoards(cartons);

//     checkCartons(ball[i], cartons);
//   }

//   // function deleteWinningBoards(boards) {

//   // }

//   function checkCartons(ball, cartons) {
//     for (let i = 0; i < cartons.length; i++) {
//       checkCarton(ball, cartons[i]);
//     }
//   }

//   function checkCarton(ball, carton) {
//     for (let i = 0; i < carton.length; i++) {
//       if (checkWinningCarton(carton)) {
//         checkLine(ball, carton[i]);
//       }
//       checkWinningCol(carton[i]);
//     }
//   }

//   // Function to check lines looking for the drawn number
//   function checkLine(ball, line) {
//     for (let i = 0; i < line.length; i++) {
//       if (ball === line[i]) {
//         line[i] = 'x';
//       }
//     }
//   }

//   // Function to check if there's a winning column and stop the game
//   function checkWinningCol(carton) {
//     for (let i = 0; i < 5; i++) {
//       if (
//         carton[0][i] === 'x' &&
//         carton[1][i] === 'x' &&
//         carton[2][i] === 'x' &&
//         carton[3][i] === 'x' &&
//         carton[4][i] === 'x'
//       ) {
//         gameOn = false;
//       }
//     }
//   }

//   function checkWinningCarton(carton) {
//     for (let line of carton) {
//       if (line.every(x => x === 'x')) {
//         return false;
//       }
//     }
//   }
// };

// checkLastBingo(drawNumbers, boards);

// console.log(winnerBoards);

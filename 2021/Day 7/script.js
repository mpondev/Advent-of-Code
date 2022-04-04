'use strict';

/*
DAY 7 (I)
Determine the horizontal position that the crabs can align to using the least fuel possible. How much fuel must they spend to align to that position?
 */

import data from './inputTest.js';

const horizontalPositions = data.split(',').map(x => Number(x));

// const optimumFuel = function (array) {
//   const totalFuel = [];
//   for (let num1 of array) {
//     let sum = 0;
//     for (let num2 of array) {
//       sum += Math.abs(num1 - num2);
//     }
//     totalFuel.push(sum);
//   }
//   return Math.min(...totalFuel);
// };

// console.log(optimumFuel(horizontalPositions)); // 355989

// Refactorized:
const optimumFuel = function (array) {
  const totalFuel = [];
  for (let num of array) {
    totalFuel.push(
      array.reduce((acc, value) => acc + Math.abs(num - value), 0)
    );
  }
  return Math.min(...totalFuel);
};

console.log(optimumFuel(horizontalPositions)); // 355989 (37 en el ejemplo)

/*
DAY 7 (II)
Now, each change of 1 step in horizontal position costs 1 more unit of fuel than the last one. In the example, it costs a total of 168 fuel.
Determine the horizontal position that the crabs can align to using the least fuel possible.
 */

const optimumFuel2 = function (array) {
  const triangularNumber = function (n) {
    return (n * (n + 1)) / 2;
  };
  const totalFuel = [];
  for (let i = Math.min(array); i <= Math.max(array); i++) {
    totalFuel.push(
      array.reduce(
        (acc, value) => acc + triangularNumber(Math.abs(array[i] - value)),
        0
      )
    );
  }
  return Math.min(...totalFuel);
};

console.log(optimumFuel2(horizontalPositions)); // 102245535 Too high (168 en el ejemplo)

const optimumFuel3 = function (array) {
  const triangularNumber = function (n) {
    return (n * (n + 1)) / 2;
  };
  const totalFuel = [];
  // const max = Math.max(...array);
  // console.log(max);
  // const min = Math.min(...array);
  // console.log(min);
  for (let i = 0; i <= array.length; i++) {
    let sum = 0;
    for (let num of array) {
      sum += triangularNumber(Math.abs(array[i] - num));
    }
    totalFuel.push(sum);
  }
  return totalFuel;
};

console.log(optimumFuel3(horizontalPositions)); // 355989

// 170 - 115 - 112 - 106 - 100 - 97 - 97 - 87 - 84 - 78
// 1ª: 817
// 0 - 120 - 225 - 361 - 439 - 544 - 589 - 709 - 814 - 817

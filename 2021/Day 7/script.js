'use strict';

/*
DAY 7 (I)
Determine the horizontal position that the crabs can align to using the least fuel possible. How much fuel must they spend to align to that position?
 */

import data from './input.js';

const horizontalPositions = data.split(',').map(x => Number(x));

const optimumFuel = function (array, constantRate = true) {
  const triangularNumber = function (n) {
    return (n * (n + 1)) / 2;
  };
  const totalFuel = [];
  const min = Math.min(...array);
  const max = Math.max(...array);
  for (let i = min; i <= max; i++) {
    let sum = 0;
    for (let num of array) {
      constantRate
        ? (sum += Math.abs(num - i))
        : (sum += triangularNumber(Math.abs(num - i)));
    }
    totalFuel.push(sum);
  }
  return Math.min(...totalFuel);
};

console.log(optimumFuel(horizontalPositions, true)); // 355989

/*
DAY 7 (II)
Now, each change of 1 step in horizontal position costs 1 more unit of fuel than the last one. In the example, it costs a total of 168 fuel.
Determine the horizontal position that the crabs can align to using the least fuel possible.
 */

// When burning at not constant rate we need to introduce the concept of 'Triangular Number' (second parameter in the function -burning at constant rate- turns false)

console.log(optimumFuel(horizontalPositions, false)); // 102245489

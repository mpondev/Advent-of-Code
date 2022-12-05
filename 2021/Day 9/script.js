'use strict';

/*
DAY 9 (I)
Find all of the low points on your heightmap. What is the sum of the risk levels of all low points on your heightmap?
 */

import data from './inputTest.js';

const heightmap = data
  .split('\n')
  .map(x => x.split(''))
  .map(x => x.map(y => Number(y)));

let sumLowPoints = 0;

for (let i = 0; i < heightmap.length; i++) {
  for (let j = 0; j < heightmap[i].length; j++) {
    const num = heightmap[i][j];
    const numUp = heightmap[i - 1] !== undefined ? heightmap[i - 1][j] : 10;
    const numDown = heightmap[i + 1] !== undefined ? heightmap[i + 1][j] : 10;
    const numLeft =
      heightmap[i][j - 1] !== undefined ? heightmap[i][j - 1] : 10;
    const numRight =
      heightmap[i][j + 1] !== undefined ? heightmap[i][j + 1] : 10;

    if (num < numUp && num < numDown && num < numLeft && num < numRight) {
      sumLowPoints += num + 1;
    }
  }
}

console.log(sumLowPoints); // 508 (Test: 15)

/*
DAY 9 (II)
What do you get if you multiply together the sizes of the three largest basins?
 */
console.log(heightmap); // (Test: 1134)

let basinCount = 0;
for (let i = 0; i < heightmap.length; i++) {
  for (let j = 0; j < heightmap[i].length; j++) {
    const basin = [];
    const num = heightmap[i][j];
    const numUp = heightmap[i - 1] !== undefined ? heightmap[i - 1][j] : 11;
    const numDown = heightmap[i + 1] !== undefined ? heightmap[i + 1][j] : 11;
    const numLeft =
      heightmap[i][j - 1] !== undefined ? heightmap[i][j - 1] : 10;
    const numRight =
      heightmap[i][j + 1] !== undefined ? heightmap[i][j + 1] : 10;

    function checkBasin(num) {
      const lin = i;
      const col = j;
      if (numUp != 9 && numUp - 1 == num) {
        basinCount++;
        checkBasin(numUp);
        checkBasin(numDown);
        checkBasin(numLeft);
        checkBasin(numRight);
      }
      if (numDown != 9 && numDown - 1 == num) {
        basinCount++;
        // checkBasin(numUp);
        // checkBasin(numDown);
        // checkBasin(numLeft);
      }
      if (numLeft != 9 && numLeft - 1 == num) {
        basinCount++;
        // checkBasin(numUp);
        // checkBasin(numDown);
        // checkBasin(numLeft);
      }
      if (numRight != 9 && numRight - 1 == num) {
        basinCount++;
      }
    }

    if (num < numUp && num < numDown && num < numLeft && num < numRight) {
      checkBasin(num);
    }
  }
}
console.log(basinCount); // (Test: 1134)

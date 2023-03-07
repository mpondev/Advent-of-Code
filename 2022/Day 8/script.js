'use strict';

/*
DAY 8 (I)
Consider your map; how many trees are visible from outside the grid?
 */

import data from './input.js';

const grid = data.split('\n').map(val => val.split('').map(num => +num));

function findVisible(grid) {
  const visible = new Array(grid.length);
  let prevMax;
  for (let row = 0; row < grid.length; row++) {
    visible[row] = new Array(grid[row].length);
    prevMax = -1;
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] > prevMax) {
        visible[row][col] = 1;
        prevMax = grid[row][col];
      }
    }
    prevMax = -1;
    for (let col = grid[row].length - 1; col >= 0; col--) {
      if (grid[row][col] > prevMax) {
        visible[row][col] = 1;
        prevMax = grid[row][col];
      }
    }
  }

  for (let col = 0; col < grid[0].length; col++) {
    prevMax = -1;
    for (let row = 0; row < grid.length; row++) {
      if (grid[row][col] > prevMax) {
        visible[row][col] = 1;
        prevMax = grid[row][col];
      }
    }
    prevMax = -1;
    for (let row = grid.length - 1; row >= 0; row--) {
      if (grid[row][col] > prevMax) {
        visible[row][col] = 1;
        prevMax = grid[row][col];
      }
    }
  }

  let visibleTrees = 0;
  visible.map(row =>
    row.map(col => {
      if (col) visibleTrees++;
    })
  );
  console.log(visibleTrees);
}

findVisible(grid); // 1835 (Tests: 21)

/*
DAY 8 (II)
Consider each tree on your map. What is the highest scenic score possible for any tree?
 */

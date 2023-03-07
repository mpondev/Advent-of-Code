'use strict';

/*
DAY 8 (I)
Consider your map; how many trees are visible from outside the grid?
 */

import data from './input.js';

const grid = data.split('\n').map(val => val.split('').map(Number));

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

function scenicScore(row, col) {
  const score = [0, 0, 0, 0]; // [west, east, north, south]

  let west = row - 1;
  while (west >= 0) {
    if (grid[west][col] < grid[row][col]) {
      score[0]++;
    } else {
      score[0]++;
      break;
    }
    west--;
  }

  let east = row + 1;
  while (east < grid[row].length) {
    if (grid[east][col] < grid[row][col]) {
      score[1]++;
    } else {
      score[1]++;
      break;
    }
    east++;
  }

  let north = col - 1;
  while (north >= 0) {
    if (grid[row][north] < grid[row][col]) {
      score[2]++;
    } else {
      score[2]++;
      break;
    }
    north--;
  }

  let south = col + 1;
  while (south < grid.length) {
    if (grid[row][south] < grid[row][col]) {
      score[3]++;
    } else {
      score[3]++;
      break;
    }
    south++;
  }

  return score.reduce((a, b) => a * b);
}

function maxScenicScore(grid) {
  let maxScore = 0;
  grid.map((_, row) =>
    _.map((_, col) => {
      const score = scenicScore(row, col);
      maxScore = Math.max(maxScore, score);
    })
  );
  console.log(maxScore);
}

maxScenicScore(grid); // 263670 (Test: 8)

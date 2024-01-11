'use strict';

/*
DAY 11 (I)
Expand the universe, then find the length of the shortest path between every pair of galaxies. What is the sum of these lengths?
 */

import data from './input.js';

const universe = data.split('\n').map(line => line.split(''));

// Insert extra lines horizontally
function expandLines(universe) {
  for (let i = universe.length - 1; i > 0; i--) {
    universe[i].every(el => el === '.') &&
      universe.splice(i, 0, new Array(universe[0].length).fill('.'));
  }
}

// Expand universe inserting extra lines horizontally and vertically
const expandedUniverse = (function expandUniverse() {
  expandLines(universe);

  // Rotate universe 90 degrees
  const universeRotated = universe[0].map((val, index) =>
    universe.map(row => row[index]).reverse()
  );

  expandLines(universeRotated);

  return universeRotated;
})();

const galaxiesCoordenates = {};

// Number each galaxy starting from 1
(function numberGalaxies() {
  let count = 1;

  for (let j = 0; j < expandedUniverse.length; j++) {
    for (let i = 0; i < expandedUniverse[0].length; i++) {
      if (expandedUniverse[j][i] === '#') {
        expandedUniverse[j][i] = count;
        galaxiesCoordenates[count] = [j, i];
        count++;
      }
    }
  }
})();

// Get the shortest path between a pairs of galaxies based on their coordenates
function getMinimumLength(coord1, coord2) {
  return Math.abs(coord1[0] - coord2[0]) + Math.abs(coord1[1] - coord2[1]);
}

function getSumOfLengths(coordenates) {
  const numbers = Object.keys(coordenates).length;
  const lengths = [];

  for (let i = 1; i < numbers; i++) {
    for (let j = i + 1; j <= numbers; j++) {
      lengths.push(getMinimumLength(coordenates[i], coordenates[j]));
    }
  }

  return lengths.reduce((a, b) => a + b, 0);
}

console.log(getSumOfLengths(galaxiesCoordenates));

// 9214785 (Test: 374)

/*
DAY 11 (II)
Starting with the same initial image, expand the universe according to these new rules, then find the length of the shortest path between every pair of galaxies. What is the sum of these lengths?
 */

// (Test x10: 1030)

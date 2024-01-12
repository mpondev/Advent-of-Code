'use strict';

/*
DAY 11 (I)
Expand the universe, then find the length of the shortest path between every pair of galaxies. What is the sum of these lengths?
 */

import data from './input.js';

const universe = data.split('\n').map(line => line.split(''));

// Get extra lines indexes
const [extraHorizontalIndexes, extraVerticalIndexes] = (() => {
  const extraHorizontalIndexes = [];
  const extraVerticalIndexes = [];

  for (let i = 0; i < universe.length; i++) {
    universe[i].every(el => el === '.') && extraHorizontalIndexes.push(i);
  }

  // Rotate universe 90 degrees to get 'vertical' extra lines
  const universeRotated = universe[0].map((val, index) =>
    universe.map(row => row[index]).reverse()
  );

  for (let i = 0; i < universeRotated.length; i++) {
    universeRotated[i].every(el => el === '.') && extraVerticalIndexes.push(i);
  }

  return [extraHorizontalIndexes, extraVerticalIndexes];
})();

const galaxiesCoordenates = {};

// Number each galaxy starting from 1
(function numberGalaxies() {
  let count = 1;

  for (let j = 0; j < universe.length; j++) {
    for (let i = 0; i < universe[0].length; i++) {
      if (universe[j][i] === '#') {
        universe[j][i] = count;
        galaxiesCoordenates[count] = [j, i];
        count++;
      }
    }
  }
})();

// Get the shortest path between a pair of galaxies based on their coordenates
function getMinimumLength(coord1, coord2, multiplier) {
  let horizontalExpansions = 0;
  let verticalExpansions = 0;

  for (let line of extraHorizontalIndexes) {
    if (coord1[0] < line && line < coord2[0]) {
      horizontalExpansions++;
    }
  }

  for (let line of extraVerticalIndexes) {
    if (
      Math.min(coord1[1], coord2[1]) < line &&
      line < Math.max(coord1[1], coord2[1])
    ) {
      verticalExpansions++;
    }
  }

  return (
    Math.abs(coord1[0] - coord2[0]) +
    horizontalExpansions * multiplier -
    horizontalExpansions +
    Math.abs(coord1[1] - coord2[1]) +
    verticalExpansions * multiplier -
    verticalExpansions
  );
}

function getSumOfLengths(coordenates, multiplier) {
  const numbers = Object.keys(coordenates).length;
  const lengths = [];

  for (let i = 1; i < numbers; i++) {
    for (let j = i + 1; j <= numbers; j++) {
      lengths.push(
        getMinimumLength(coordenates[i], coordenates[j], multiplier)
      );
    }
  }

  return lengths.reduce((a, b) => a + b, 0);
}

console.log(getSumOfLengths(galaxiesCoordenates, 2)); // 9214785 (Test: 374)

/*
DAY 11 (II)
Starting with the same initial image, expand the universe according to these new rules, then find the length of the shortest path between every pair of galaxies. What is the sum of these lengths?
 */

console.log(getSumOfLengths(galaxiesCoordenates, 1000000)); // 613686987427 (Test x10: 1030, x100: 8410)

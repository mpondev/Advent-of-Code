'use strict';

/*
DAY 5 (I)
What is the lowest location number that corresponds to any of the initial seed numbers?
 */

import data from './input.js';

const almanac = data
  .split(/\n\n/)
  .map(el => el.split(':'))
  .map(el => el.map(el => el.trim().split('\n')).flat())
  .map(el => el.map(el => el.split(' ')).slice(1));

const seeds = almanac[0][0].map(el => Number(el));
const maps = almanac
  .slice(1)
  .map(group => group.map(line => line.map(el => Number(el))));

function convert(seed, maps) {
  let newSeed = seed;

  for (let map of maps) {
    let mapConversion;

    for (let line of map) {
      let range = line[2];
      let diff = line[0] - line[1];

      if (line[1] <= newSeed && newSeed <= line[1] + range && !mapConversion) {
        mapConversion = newSeed + diff;
        newSeed += diff;
      }
    }
  }

  return newSeed;
}

const result = [];

for (let seed of seeds) {
  result.push(convert(seed, maps));
}

console.log(Math.min(...result)); // 346433842 (Test: 35)

/*
DAY 5 (II)
What is the lowest location number that corresponds to any of the initial seed numbers?
 */

const seedRanges = seeds.reduce((result, _, index, array) => {
  index % 2 === 0 && result.push(array.slice(index, index + 2));
  return result;
}, []);

function convertRanges(seed, maps) {
  let [newSeed, seedRange] = seed;
  let minimum;

  for (
    let seedToCheck = newSeed;
    seedToCheck <= newSeed + seedRange;
    seedToCheck++
  ) {
    let newSeedToCheck = seedToCheck;

    for (let map of maps) {
      let mapConversion;

      for (let line of map) {
        let range = line[2];
        let diff = line[0] - line[1];

        if (
          line[1] <= newSeedToCheck &&
          newSeedToCheck <= line[1] + range &&
          !mapConversion
        ) {
          mapConversion = newSeedToCheck + diff;
          newSeedToCheck += diff;
        }
      }
    }

    if (!minimum) {
      minimum = newSeedToCheck;
    } else {
      if (minimum > newSeedToCheck) {
        minimum = newSeedToCheck;
      }
    }
  }

  return minimum;
}

const rangeResult = [];

for (let seed of seedRanges) {
  rangeResult.push(convertRanges(seed, maps));
}

console.log(Math.min(...rangeResult)); // 60294664 (Test: 46)

// FIXME
// Too slow solution

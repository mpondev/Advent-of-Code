/*
DAY 6 (I)
Each day, a 0 becomes a 6 and adds a new 8 to the end of the list, while each other number decreases by 1 if it was present at the start of the day.

In this example, after 18 days, there are a total of 26 fish. After 80 days, there would be a total of 5934.

Find a way to simulate lanternfish. How many lanternfish would there be after 80 days?
 */

import data from './inputTest.js';

const lanternfish = data.split(',').map(x => Number(x));

const population = new Map();
for (let i = 0; i <= 8; i++) {
  population.set(i, 0);
}
for (let i = 0; i < lanternfish.length; i++) {
  population.forEach((val, key) => {
    if (key === lanternfish[i]) {
      val++;
    }
  });
}
console.log(population);

for (let i = 0; i < 80; i++) {
  for (let j = 0; j < lanternfish.length; j++) {
    if (lanternfish[j] > 0) {
      lanternfish[j]--;
    } else if (lanternfish[j] === 0) {
      lanternfish[j] = 6;
      lanternfish.push(9);
    }
  }
}

console.log(lanternfish.length); // 349549

/*
DAY 6 (II)
How many lanternfish would there be after 256 days? 26984457539 in the example.
 */

// Solution: 1589590444365 ??

function growFish(input, numberOfDays) {
  let fishByAge = populateAges(input);

  for (let day = 0; day < numberOfDays; day++) {
    const todayAges = initNumberMap(0, 8);

    // age the non-reproducers
    for (let age = 1; age <= 8; age++) {
      todayAges.set(age - 1, fishByAge.get(age));
    }

    // handle the day's reproducers
    incrementMapElement(todayAges, 8, fishByAge.get(0));
    incrementMapElement(todayAges, 6, fishByAge.get(0));

    fishByAge = todayAges;
  }

  // return fish count
  return [...fishByAge.values()].reduce((acc, value) => acc + value);
}

function populateAges(input) {
  const fishMap = initNumberMap(0, 8);

  for (let i = 0; i < input.length; i++) {
    incrementMapElement(fishMap, input[i], 1);
  }

  return fishMap;
}

function incrementMapElement(map, key, amount) {
  map.set(key, map.get(key) + amount);
}

// Crea y devuelve un Map
function initNumberMap(start, end) {
  const newMap = new Map();
  for (let i = start; i <= end; i++) {
    newMap.set(i, 0);
  }
  return newMap;
}

const input = data.split(',').map(x => parseInt(x));

console.log(growFish(input, 80));
console.log(growFish(input, 256));

console.log(initNumberMap(0, 8));
const todayAges = initNumberMap(0, 8);
console.log(todayAges);

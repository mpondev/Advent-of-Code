/*
DAY 6 (I)
Each day, a 0 becomes a 6 and adds a new 8 to the end of the list, while each other number decreases by 1 if it was present at the start of the day.

In this example, after 18 days, there are a total of 26 fish. After 80 days, there would be a total of 5934.

Find a way to simulate lanternfish. How many lanternfish would there be after 80 days?
 */

import data from './input.js';

const fish = data.split(',').map(x => Number(x));

const fishPopulation = function (days) {
  // population starts as an empty Map where: (keys = days left) and (values = number of fishes with those days left)
  let population = new Map();
  for (let i = 0; i <= 8; i++) {
    population.set(i, 0);
  }
  // and we populate it with input data
  for (let i = 0; i < fish.length; i++) {
    population.set(fish[i], population.get(fish[i]) + 1);
  }

  // iterate each day to get new borns
  for (let i = 0; i < days; i++) {
    const newPopulation = new Map(population);
    const newBorns = population.get(0);
    for (let age = 1; age <= 8; age++) {
      newPopulation.set(age - 1, population.get(age));
    }
    newPopulation.set(8, newBorns);
    newPopulation.set(6, newPopulation.get(6) + newBorns);

    population = newPopulation;
  }

  return [...population.values()].reduce((prev, val) => prev + val, 0);
};

console.log(fishPopulation(80)); // 349549

/*
DAY 6 (II)
How many lanternfish would there be after 256 days? 26984457539 in the example.
 */

console.log(fishPopulation(256)); // 1589590444365

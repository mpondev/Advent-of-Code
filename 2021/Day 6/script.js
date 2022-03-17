/*
DAY 6 (I)
Each day, a 0 becomes a 6 and adds a new 8 to the end of the list, while each other number decreases by 1 if it was present at the start of the day.

In this example, after 18 days, there are a total of 26 fish. After 80 days, there would be a total of 5934.

Find a way to simulate lanternfish. How many lanternfish would there be after 80 days?
 */

import data from './input.js';

const lanternfish = [];
for (let value of data) {
  if (value !== ',') {
    lanternfish.push(Number(value));
  }
}

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
How many lanternfish would there be after 256 days?
 */

'use strict';

/*
DAY 3 (I)
Scan the corrupted memory for uncorrupted mul instructions. What do you get if you add up all of the results of the multiplications?
 */

// Fetch data. Template literal doesn't work here because of special characters.
async function fetchData() {
  try {
    const response = await fetch('./input.txt');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.text();

    return data;
  } catch (error) {
    console.error('There has been a problem fetching data:', error);
  }
}

const data = await fetchData();

let mul = 0;
for (let part of data.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)) {
  mul += part[1] * part[2];
}

console.log(mul); // 187825547 (Test: 161)

/*
DAY 3 (II)
Handle the new instructions; what do you get if you add up all of the results of just the enabled multiplications?
 */

// (Test: 48)

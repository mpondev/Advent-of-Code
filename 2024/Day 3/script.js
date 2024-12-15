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

const mulRegEx = /mul\((\d{1,3}),(\d{1,3})\)/g;

let mul = 0;
for (let part of data.matchAll(mulRegEx)) {
  mul += part[1] * part[2];
}

console.log(mul); // 187825547 (Test: 161)

/*
DAY 3 (II)
Handle the new instructions; what do you get if you add up all of the results of just the enabled multiplications?
 */

const doRegEx = /do\(\)/g;
const dontRegEx = /don't\(\)/g;

// Obtain all matches and sort them by index
const doMatches = [...data.matchAll(doRegEx)];
const dontMatches = [...data.matchAll(dontRegEx)];
const mulMatches = [...data.matchAll(mulRegEx)];

const allMatches = [...doMatches, ...dontMatches, ...mulMatches].sort(
  (a, b) => a.index - b.index
);

// Get the enabled multiplications
let mulEnabled = 0;
let enabled = true;

allMatches.forEach(match => {
  if (match[0] === 'do()') {
    enabled = true;
  } else if (match[0] === "don't()") {
    enabled = false;
  } else if (enabled) {
    mulEnabled += match[1] * match[2];
  }
});

console.log(mulEnabled); // 85508223 (Test: 48)

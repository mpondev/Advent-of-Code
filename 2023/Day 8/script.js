'use strict';

/*
DAY 8 (I)
Find the rank of every hand in your set. What are the total winnings?
 */

import data from './input.js';

// Prepare data
let [instructions, maps] = data.split('\n\n');

let reg = /(\= \()|,|\)/g;
maps = maps.replace(reg, '').split('\n');

// Regular expressions to find first/middle/last element
const reg1 = /^[A-Z0-9]{3}/;
const reg2 = /(?<= )[A-Z0-9]{3}(?= )/;
const reg3 = /[A-Z0-9]{3}$/;

function findElement(element) {
  for (let line of maps) {
    if (line.match(reg1)[0] === element) {
      return line;
    }
  }
}

function stepsToZ() {
  let steps = 0;
  let element = 'AAA';

  while (element !== 'ZZZ') {
    element =
      instructions[steps % instructions.length] === 'L'
        ? findElement(element).match(reg2)[0]
        : findElement(element).match(reg3)[0];
    steps++;
  }

  console.log(steps);
}

stepsToZ(); // 13939 (Test: 2, 6)

/*
DAY 8 (II)
How many steps does it take before you're only on nodes that end with Z?
 */

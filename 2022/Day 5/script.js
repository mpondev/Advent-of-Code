'use strict';

/*
DAY 5 (I)
After the rearrangement procedure completes, what crate ends up on top of each stack? (CrateMover 9000)
 */

import data from './input.js';

// Extract the starting stacks and the rearrangement procedure from data
const [stacks, procedure] = data.split('\n\n');

// Prepare rearrangement procedure into an array of integers [moves, from, to]
const procedureNumbers = procedure
  .split('\n')
  .map(el => el.match(/\d+/g).map(el => parseInt(el)));

// Prepare starting stacks
const startingStacks = function () {
  // Get an array whose elements are height levels
  let output = stacks
    .split('\n')
    .map(el => el.replace(/\s{4}/g, '*').replace(/[\s{4}\[, ,\]]/g, ''))
    .map(el => el.split(''));
  // Transpose array so now each element is an stack
  output = output[0].map((_, stackIndex) =>
    output.map(height => height[stackIndex])
  );
  // Remove empty spaces ('*') at the top of the stacks
  function removeSpaces(el) {
    if (el[0] === '*') {
      el.shift();
      removeSpaces(el);
      return el;
    }
  }
  output.forEach(el => {
    removeSpaces(el);
  });
  return output;
};

// Rearrange crates
function rearrangeCrates(arr, procedure, crateMover) {
  for (let proc of procedure) {
    // CrateMover 9000 moves one crate at once
    if (crateMover == 9000) {
      for (let i = 0; i < proc[0]; i++) {
        arr[proc[2] - 1].unshift(arr[proc[1] - 1].shift());
      }
      // CrateMover 9001 moves multiple crates at once
    } else if (crateMover == 9001) {
      let tempStack = [];
      for (let i = 0; i < proc[0]; i++) {
        tempStack.push(arr[proc[1] - 1].shift());
      }
      for (let i = 0; i < proc[0]; i++) {
        arr[proc[2] - 1].unshift(tempStack.pop());
      }
    }
  }
  return arr;
}

// Get message
let finalStacks = rearrangeCrates(startingStacks(), procedureNumbers, 9000);

function getMessage() {
  const message = [];
  for (let stack of finalStacks) {
    message.push(stack[0]);
  }
  return message.join('');
}
console.log(getMessage()); // HBTMTBSDC (Test: CMZ)

/*
DAY 5 (II)
After the rearrangement procedure completes, what crate ends up on top of each stack? (CrateMover 9001)
 */

finalStacks = rearrangeCrates(startingStacks(), procedureNumbers, 9001);
console.log(getMessage()); // PQTJRSHWS (Test: MCD)

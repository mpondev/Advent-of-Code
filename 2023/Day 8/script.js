'use strict';

/*
DAY 8 (I)
How many steps are required to reach ZZZ?
 */

import data from './input.js';

// Prepare data
let [instructions, maps] = data.split('\n\n');

let reg = /(\= \()|,|\)/g;
maps = maps
  .replace(reg, '')
  .split('\n')
  .map(line => line.split(' '));

function findElement(element) {
  for (let line of maps) {
    if (line[0] === element) {
      return line;
    }
  }
  return null;
}

function stepsToZZZ(element) {
  if (!findElement(element)) {
    console.log(`Element ${element} was not found on maps`);
    return;
  }

  let steps = 0;

  while (element !== 'ZZZ') {
    element =
      instructions[steps % instructions.length] === 'L'
        ? findElement(element)[1]
        : findElement(element)[2];
    steps++;
  }

  console.log(steps);
}

stepsToZZZ('AAA'); // 13939 (Test: 2, 6)

/*
DAY 8 (II)
How many steps does it take before you're only on nodes that end with Z?
 */

function findStart() {
  const lines = [];
  for (let line of maps) {
    if (line[0].endsWith('A')) {
      lines.push(line);
    }
  }
  return lines;
}

function stepsToZ(element) {
  let steps = 0;

  while (!element.endsWith('Z')) {
    element =
      instructions[steps % instructions.length] === 'L'
        ? findElement(element)[1]
        : findElement(element)[2];
    steps++;
  }

  return steps;
}

let elements = findStart().map(el => el[0]);

const individualSteps = [];

elements.forEach(element => individualSteps.push(stepsToZ(element)));

// Greatest Common Divisor (used to get LCM)
function gcd(a, b) {
  for (let temp = b; b !== 0; ) {
    b = a % b;
    a = temp;
    temp = b;
  }
  return a;
}

// Least Common Multiple
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(individualSteps.reduce((a, b) => lcm(a, b))); // 8906539031197

/*
DAY 8 (II) --Tooo slow solution--
How many steps does it take before you're only on nodes that end with Z?
 */

// // Regular expressions to find first/middle/last element
// const regStart = /^[A-Z0-9]{2}A/;
// const regTarget = /^[A-Z0-9]{2}Z/;

// function findElement(element) {
//   for (let line of maps) {
//     if (line.match(reg1)[0] === element) {
//       return line;
//     }
//   }
// }

// const lines = [];

// function findStart() {
//   for (let line of maps) {
//     if (line.match(regStart)) {
//       lines.push(line);
//     }
//   }
//   return lines;
// }

// let target = false;
// function stepsToZZ() {
//   let steps = 0;
//   let elements = findStart().map(el => el.split(' ')[0]);

//   while (!target) {
//     let temp = [];
//     for (let element of elements) {
//       temp.push(
//         instructions[steps % instructions.length] === 'L'
//           ? findElement(element).match(reg2)[0]
//           : findElement(element).match(reg3)[0]
//       );
//     }

//     steps++;
//     elements = temp;
//     target = temp.every(el => el[2] === 'Z');
//   }

//   console.log(steps);
// }

// stepsToZZ(); // 8906539031197 (Test: 6)

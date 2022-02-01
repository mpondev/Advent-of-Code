/*
 * DAY 2 (I)
 *
 * What do you get if you multiply your final horizontal position by your final depth?
 */

import entries from './input.js';

// Convert the string into an array with the split() method, creating an array of substrings. As the entries are separated by a newline character, use its escape sequence to split the string. Then separate strings from numbers
let entriesArr = entries.split('\n').map(value => value.split(' '));

let position = [0, 0];
entriesArr.map(value => {
  if (value[0] === 'forward') {
    position[0] += Number(value[1]);
  } else if (value[0] === 'down') {
    position[1] += Number(value[1]);
  } else if (value[0] === 'up') {
    position[1] -= Number(value[1]);
  }
});

console.log(position[0] * position[1]); // 1427868 (2034 * 702)

/*
 * DAY 2 (II)
 * Using this new interpretation of the commands, calculate the horizontal position
 * and depth you would have after following the planned course. What do you get if
 * you multiply your final horizontal position by your final depth?
 */

position = [0, 0, 0]; // horizontal position, depth, aim
entriesArr.map(value => {
  if (value[0] === 'forward') {
    position[0] += Number(value[1]);
    position[1] += Number(value[1]) * position[2];
  } else if (value[0] === 'down') {
    position[2] += Number(value[1]);
  } else if (value[0] === 'up') {
    position[2] -= Number(value[1]);
  }
});

console.log(position[0] * position[1]); // 1568138742 (2034 * 770963)

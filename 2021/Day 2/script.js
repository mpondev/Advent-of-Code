/*
 * DAY 2 (I)
 *
 * HWhat do you get if you multiply your final horizontal position by your final depth?
 */

"use strict";

// First we create a Template Literal using ` `
const entries = `forward 2
down 2
forward 6
forward 8
down 8
up 2
forward 7
forward 8
down 1
down 8
forward 9
down 1
down 9
up 9
forward 8
down 4
forward 1
forward 4
up 3
down 1
up 4
up 7
down 8
forward 8
forward 9
down 7
forward 2
up 2
forward 3
forward 2
down 8
up 3
up 3
forward 6
down 5
up 6
down 3
forward 4
forward 2
down 9
down 9
down 1
down 3
forward 7
forward 4
down 1
down 3
up 3
up 9
up 2
down 6
down 7
forward 9
down 7
forward 3
forward 5
up 6
up 4
down 8
down 6
down 4
up 2
up 7
up 8
up 1
forward 7
up 9
down 6
up 7
up 3
forward 8
up 9
down 9
up 2
forward 8
forward 4
up 3
forward 4
up 2
down 3
up 7
down 7
forward 6
forward 5
forward 2
forward 3
up 2
down 3
up 6
forward 2
forward 4
up 2
down 6
up 3
down 8
forward 7
forward 8
forward 3
down 6
forward 5
forward 8
down 6
forward 4
down 3
up 2
down 6
down 5
forward 8
forward 8
up 1
down 9
down 6
forward 8
up 1
down 7
forward 7
up 4
up 6
down 3
down 1
up 9
forward 8
forward 1
forward 2
forward 2
up 9
up 4
down 8
up 9
down 8
forward 1
forward 6
up 3
down 4
forward 1
down 5
down 7
down 9
forward 1
forward 1
forward 5
up 2
up 4
down 8
forward 3
forward 1
forward 4
down 6
up 4
up 4
down 6
up 9
down 2
up 6
forward 5
forward 5
forward 1
down 2
up 1
forward 6
up 7
forward 4
up 3
forward 3
forward 8
up 5
forward 4
up 3
forward 9
down 4
down 8
down 8
forward 8
forward 4
down 5
up 8
down 4
up 9
forward 5
up 3
forward 8
forward 3
forward 7
forward 5
forward 3
down 4
down 3
forward 9
down 9
forward 3
down 7
forward 8
down 3
forward 7
forward 5
up 6
up 1
forward 3
down 3
up 3
down 1
forward 8
forward 5
forward 1
forward 6
forward 9
up 5
down 5
down 9
forward 2
down 5
down 4
up 9
forward 9
forward 7
down 8
up 3
down 7
down 1
down 2
down 4
forward 2
forward 7
forward 3
down 5
down 3
up 3
down 4
down 1
forward 9
down 1
forward 4
forward 6
forward 7
down 8
up 4
up 3
down 4
forward 5
down 9
down 1
down 9
up 9
forward 6
forward 7
down 2
up 1
forward 8
up 3
forward 9
forward 1
up 9
down 4
forward 8
forward 4
forward 3
forward 7
forward 1
forward 5
forward 5
forward 7
down 8
forward 1
up 8
forward 7
up 8
forward 2
forward 7
forward 3
down 2
forward 2
forward 6
down 7
down 1
up 2
down 7
up 3
down 8
down 4
forward 2
down 6
forward 4
down 8
down 9
forward 2
down 2
down 1
forward 7
up 2
down 2
forward 8
forward 3
down 9
down 4
down 5
forward 6
forward 2
down 7
up 7
forward 1
down 7
down 3
up 5
down 8
down 2
down 2
up 1
forward 6
up 2
down 3
up 1
down 9
forward 5
forward 5
up 5
down 1
down 7
down 2
forward 5
down 6
up 6
forward 3
down 1
up 3
forward 3
down 7
forward 5
down 8
down 5
down 7
down 7
down 2
forward 8
down 7
down 2
up 7
down 6
down 8
up 7
forward 5
up 8
down 1
forward 5
down 2
forward 3
down 9
down 7
forward 3
up 9
up 7
down 5
down 3
forward 3
down 7
forward 6
forward 2
up 9
down 6
up 4
down 3
up 3
up 6
up 1
down 1
down 7
forward 7
down 1
up 1
forward 6
down 2
up 6
forward 4
down 9
forward 1
forward 3
down 1
forward 9
forward 1
forward 5
down 1
down 8
down 7
down 7
down 3
up 1
down 6
down 2
forward 3
forward 8
down 6
down 8
down 1
down 6
forward 5
down 2
down 6
forward 7
down 6
forward 2
forward 3
down 8
forward 4
down 5
down 1
up 7
forward 3
forward 1
forward 9
forward 5
down 2
forward 6
down 1
up 3
forward 6
forward 5
down 3
down 6
forward 2
forward 3
down 9
up 4
up 9
up 1
forward 6
down 6
forward 9
forward 9
down 6
forward 4
down 6
forward 6
forward 2
forward 8
forward 2
down 2
forward 6
forward 4
forward 2
up 1
down 2
forward 7
forward 2
down 9
forward 2
forward 1
down 8
forward 4
forward 7
up 3
down 2
forward 4
up 6
down 1
forward 6
forward 3
down 3
down 3
forward 7
forward 9
forward 5
forward 9
down 3
down 3
up 7
down 2
forward 1
forward 3
up 1
forward 6
down 6
down 4
down 2
down 3
down 1
up 6
forward 5
down 6
forward 2
down 7
forward 4
down 2
down 7
down 6
forward 3
forward 1
forward 6
down 3
forward 3
up 1
forward 5
down 2
up 1
down 2
up 5
down 2
up 3
down 7
up 6
down 9
forward 1
forward 3
down 9
up 9
down 4
down 1
forward 7
forward 6
up 1
forward 5
down 4
up 4
forward 7
forward 6
down 9
up 9
up 6
up 6
forward 6
up 4
forward 7
down 4
up 1
forward 3
down 5
down 5
up 2
down 6
forward 2
up 2
forward 1
up 7
up 8
up 7
down 3
forward 5
forward 9
up 9
down 7
forward 5
up 8
down 9
forward 6
forward 1
forward 3
down 5
up 4
up 8
down 5
forward 5
up 9
down 7
up 3
forward 4
down 1
forward 1
down 4
forward 8
up 8
forward 4
forward 5
forward 6
forward 2
forward 5
forward 6
up 9
down 3
up 6
down 3
down 1
down 2
down 7
down 9
up 8
down 5
forward 4
down 9
forward 8
forward 9
down 3
forward 4
up 6
forward 4
forward 4
down 6
up 4
down 4
forward 9
down 5
down 7
forward 9
forward 4
down 7
down 2
down 5
down 4
forward 5
down 5
forward 8
forward 9
forward 2
down 8
forward 9
down 2
forward 3
up 6
up 5
down 9
down 1
up 7
forward 9
forward 9
forward 2
down 5
up 5
down 1
forward 8
forward 7
down 7
down 8
down 1
forward 5
down 3
forward 4
down 1
down 5
forward 9
up 1
down 4
down 7
forward 8
up 9
up 6
forward 4
up 1
forward 9
down 6
up 7
down 8
up 2
forward 9
up 6
down 1
up 7
down 5
down 3
forward 2
down 7
forward 5
forward 4
down 4
up 7
down 5
up 4
forward 9
forward 6
forward 4
down 8
forward 1
down 2
forward 2
down 3
up 6
forward 4
down 5
up 8
forward 6
forward 4
up 4
forward 5
forward 3
down 8
forward 9
forward 1
forward 7
down 8
up 5
forward 6
down 4
forward 3
forward 7
forward 2
down 1
up 5
up 4
down 8
forward 3
forward 8
down 8
forward 3
up 9
forward 9
forward 2
forward 7
down 9
up 5
forward 7
down 4
up 4
up 6
down 2
up 9
up 7
forward 4
down 5
up 4
forward 3
down 4
down 7
down 7
up 7
down 9
down 9
forward 7
up 2
forward 4
forward 4
forward 8
forward 2
down 1
up 8
down 9
forward 1
forward 4
down 5
down 3
forward 3
forward 1
up 4
down 6
forward 2
down 5
down 1
down 2
forward 2
down 3
forward 6
down 6
down 3
forward 9
up 6
up 9
down 9
up 5
down 1
down 1
down 6
forward 6
forward 5
forward 5
forward 6
down 8
up 4
down 3
down 8
down 9
down 4
down 7
forward 2
up 5
forward 2
forward 2
forward 4
down 4
down 3
forward 6
forward 9
down 9
forward 4
down 9
down 2
forward 1
down 2
up 3
forward 2
down 9
up 5
down 9
forward 9
forward 8
down 1
down 6
up 2
up 9
forward 7
up 1
down 1
down 3
up 5
down 2
up 5
down 7
up 7
up 8
forward 2
forward 3
down 4
forward 6
up 3
forward 7
forward 7
forward 7
forward 7
forward 8
forward 4
up 1
forward 6
forward 9
forward 2
down 3
up 8
down 9
down 3
down 8
up 9
down 6
up 6
up 9
forward 9
down 9
forward 6
forward 1
down 3
up 2
forward 1
up 2
up 1
forward 2
down 1
up 4
forward 9
down 5
up 9
down 4
forward 4
forward 1
down 8
forward 8
down 5
forward 5
forward 7
forward 6
forward 7
down 7
down 3
forward 9
forward 6
down 7
forward 3
forward 2
down 1
forward 2
forward 5
up 7
up 7
forward 2
up 1
forward 2
up 2
up 2
up 6
forward 4
down 2
up 3
down 4
down 7
down 6
forward 6
forward 5
forward 8
forward 9
up 1
down 9
up 6
down 1
up 1
down 5
forward 2
forward 9
forward 9
up 4
up 2
forward 8
up 4
down 3
down 8
forward 2
down 3
down 8
forward 2
down 6
down 8
down 1
up 4
down 1
forward 2
up 7
up 8
down 8
down 8
forward 8
down 1
down 2
down 1
forward 9
forward 5
forward 8
forward 7
down 9
down 2
down 8
forward 9
down 3
forward 4
forward 1
down 4
forward 9
up 6
forward 6
forward 7
forward 7
forward 6
forward 8
down 4
forward 7
down 8
up 1
forward 2
down 1
up 7
forward 6
up 9
down 4
up 4
forward 1
down 7
down 2
forward 4
forward 4
down 4
down 2
forward 5
forward 9
down 4
down 5
down 6
up 9
down 2
up 4
forward 7
forward 5
forward 1
forward 9
down 7
up 4
up 7
forward 5
up 8
forward 2
down 3
up 1
down 4
forward 4
forward 3
forward 9
forward 9
down 9
down 9
up 7
forward 4
forward 9
down 5
down 5
up 7
up 4
forward 9
up 5
down 2
forward 5
down 1
forward 2
down 6
down 9
forward 2
up 4
forward 6
forward 6
down 1
up 8
forward 5
forward 9
forward 6
forward 4
forward 9
forward 2
forward 5
down 6
up 4
forward 2
up 1
forward 5`

// Convert the string into an array with the split() method, creating an array of substrings. As the entries are separated by a newline character, use its escape sequence to split the string. Then separate strings from numbers
let entriesArr = entries.split("\n").map(value => value.split(" "));

let position = [0, 0];

let entriesArr2 = entriesArr.map(value => {
    if (value[0] === 'forward') {
        position[0] += Number(value[1])
    } else if (value[0] === 'down') {
        position[1] += Number(value[1])
    } else if (value[0] === 'up') {
        position[1] -= Number(value[1])
    }
});

console.log(position[0] * position[1]); // 1427868 (2034 * 702)

/*
 * DAY 2 (II)
 * Using this new interpretation of the commands, calculate the horizontal position
 * and depth you would have after following the planned course. What do you get if
 * you multiply your final horizontal position by your final depth?
 */

'use strict';

/*
DAY 4 (I)
Take a look at the little Elf's word search. How many times does XMAS appear?
 */

import data from './input.js';

// Using a fixed line length (it wouldn't work for other inputs like the test case)

/*
console.log(
  data.match(/(?=XMAS|SAMX)/g).length +
    data.match(/(?=X.{140}M.{140}A.{140}S|S.{140}A.{140}M.{140}X)/gs).length +
    data.match(/(?=X.{139}M.{139}A.{139}S|S.{139}A.{139}M.{139}X)/gs).length +
    data.match(/(?=X.{141}M.{141}A.{141}S|S.{141}A.{141}M.{141}X)/gs).length
);
*/

// Using dynamic line length
const lineLength = data.indexOf('\n');

const regexHorizontal = /(?=XMAS|SAMX)/g;
const regexVertical = new RegExp(
  `(?=X.{${lineLength}}M.{${lineLength}}A.{${lineLength}}S|S.{${lineLength}}A.{${lineLength}}M.{${lineLength}}X)`,
  'gs'
);
const regexDiagonal1 = new RegExp(
  `(?=X.{${lineLength - 1}}M.{${lineLength - 1}}A.{${lineLength - 1}}S|S.{${
    lineLength - 1
  }}A.{${lineLength - 1}}M.{${lineLength - 1}}X)`,
  'gs'
);
const regexDiagonal2 = new RegExp(
  `(?=X.{${lineLength + 1}}M.{${lineLength + 1}}A.{${lineLength + 1}}S|S.{${
    lineLength + 1
  }}A.{${lineLength + 1}}M.{${lineLength + 1}}X)`,
  'gs'
);

console.log(
  (data.match(regexHorizontal) || []).length +
    (data.match(regexVertical) || []).length +
    (data.match(regexDiagonal1) || []).length +
    (data.match(regexDiagonal2) || []).length
); // 2551  (Test: 18)

/*
DAY 4 (II)
Flip the word search from the instructions back over to the word search side and try again. How many times does an X-MAS appear?
 */

// (Test: 9)

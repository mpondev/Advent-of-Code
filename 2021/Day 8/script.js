'use strict';

/*
DAY 8 (I)
In the output values, how many times do digits 1, 4, 7, or 8 appear?
 */

import data from './input.js';

const outputs = data
  .split('\n')
  .map(x => x.split(' | '))
  .map(x => x.splice(1).join())
  .map(x => x.split(' '));

const counter = function (array) {
  let count = 0;
  array.forEach(x =>
    x.forEach(y => {
      if (y.length === 2 || y.length === 4 || y.length === 3 || y.length === 7)
        count++;
    })
  );
  return count;
};

console.log(counter(outputs)); // 445 (Test: 26)

/*
DAY 8 (II)
For each entry, determine all of the wire/segment connections and decode the four-digit output values. What do you get if you add up all of the output values?
 */
const inputs = data
  .split('\n')
  .map(x => x.split(' | '))
  .map(x => x.splice(0, 1).join())
  .map(x => x.split(' '));

const findoutInputs = function (inp, out) {
  // Function that receives 2 Sets, compares them and returns the different letter(s)
  const missingLetter = function (set1, set2) {
    let missing = new Set([...set1]);
    for (let elem of new Set([...set2])) {
      missing.delete(elem);
    }
    let letter = '';
    missing.forEach(x => (letter += x));
    return letter;
  };

  // Function that receives an String and returns a Set
  const sendLettersToSet = function (str, set) {
    for (let letter of str) {
      set.add(letter);
    }
  };

  for (let i = 0; i < inp.length; i++) {
    const segments = {
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
    };

    const digit0 = new Set(); // a, b, c,  , e, f, g [length: 6]
    const digit1 = new Set(); //  ,  , c,  ,  , f,   [length: 2]
    // const digit2 = new Set(); // a,  , c, d, e,  , g [length: 5]
    // const digit3 = new Set(); // a,  , c, d,  , f, g [length: 5]
    const digit4 = new Set(); //  , b, c, d,  , f,   [length: 4]
    // const digit5 = new Set(); // a, b,  , d,  , f, g [length: 5]
    const digit6 = new Set(); // a, b,  , d, e, f, g [length: 6]
    const digit7 = new Set(); // a,  , c,  ,  , f,   [length: 3]
    const digit8 = new Set(); // a, b, c, d, e, f, g [length: 7]
    const digit9 = new Set(); // a, b, c, d,  , f, g [length: 6]

    for (let j = 0; j < inp[i].length; j++) {
      if (inp[i][j].length === 2) {
        sendLettersToSet(inp[i][j], digit1);
      } else if (inp[i][j].length === 3) {
        sendLettersToSet(inp[i][j], digit7);
      } else if (inp[i][j].length === 4) {
        sendLettersToSet(inp[i][j], digit4);
      } else if (inp[i][j].length === 7) {
        sendLettersToSet(inp[i][j], digit8);
      }
      segments.a = missingLetter(digit7, digit1);
    }

    for (let j = 0; j < inp[i].length; j++) {
      let tempDigit1 = new Set([...digit7, ...digit4]);
      if (inp[i][j].length === 6) {
        let counter = 0;
        for (let letter of inp[i][j]) {
          if (tempDigit1.has(letter)) counter++;
        }
        if (counter === 5) {
          sendLettersToSet(inp[i][j], digit9);
        }
        segments.g = missingLetter(digit9, tempDigit1);
      }

      let tempDigit2 = new Set([...digit7]);
      if (inp[i][j].length === 6 && inp[i][j] !== [...digit9].join('')) {
        let counter = 0;
        for (let letter of inp[i][j]) {
          if (tempDigit2.has(letter)) counter++;
        }
        if (counter === 3) {
          sendLettersToSet(inp[i][j], digit0);
        }
        segments.d = missingLetter(digit8, digit0);
      }

      if (
        inp[i][j].length === 6 &&
        inp[i][j] !== [...digit9].join('') &&
        inp[i][j] !== [...digit0].join('')
      ) {
        sendLettersToSet(inp[i][j], digit6);
      }
      segments.c = missingLetter(digit8, digit6);
      segments.f = missingLetter(digit1, segments.c);
      let temp = new Set([segments.c, segments.d, segments.f]);
      segments.b = missingLetter(digit4, temp);
      temp = new Set([
        segments.a,
        segments.b,
        segments.c,
        segments.d,
        segments.f,
        segments.g,
      ]);
      segments.e = missingLetter(digit8, temp);
    }

    for (let j = 0; j < out[i].length; j++) {
      if (out[i][j].length === 2) out[i][j] = 1;
      if (out[i][j].length === 3) out[i][j] = 7;
      if (out[i][j].length === 4) out[i][j] = 4;
      if (out[i][j].length === 7) out[i][j] = 8;
      if (out[i][j].length === 6 && !out[i][j].includes(segments.d))
        out[i][j] = 0;
      if (out[i][j].length === 6 && !out[i][j].includes(segments.c))
        out[i][j] = 6;
      if (out[i][j].length === 6 && !out[i][j].includes(segments.e))
        out[i][j] = 9;
      if (out[i][j].length === 5 && out[i][j].includes(segments.e))
        out[i][j] = 2;
      if (out[i][j].length === 5 && out[i][j].includes(segments.b))
        out[i][j] = 5;
      if (out[i][j].length === 5) out[i][j] = 3;
    }
  }
  const solution = [];
  for (let el of out) {
    solution.push(Number(el.join('')));
  }
  const answer = solution.reduce((a, b) => a + b, 0);
  console.log(answer);
};

findoutInputs(inputs, outputs); // 1043101 (Test: 61229)

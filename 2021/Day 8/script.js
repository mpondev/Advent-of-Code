'use strict';

/*
DAY 8 (I)
In the output values, how many times do digits 1, 4, 7, or 8 appear?
 */

import data from './inputTest.js';

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

console.log(counter(outputs)); // 445 (26 for the test)

// acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf
//    8      *     *     *    7    *      *     4     *    1
//    8    2/3/5 2/3/5 2/3/5  7  0/6/9  0/6/9   4   0/6/9  1
//    8      5     2     3    7    9      6     4     0    1

/*
1 ->  ,  , c,  ,  , f,   [2] 1º
7 -> a,  , c,  ,  , f,   [3] 2º
4 ->  , b, c, d,  , f,   [4] 3º
2 -> a,  , c, d, e,  , g [5] 10º el último
3 -> a,  , c, d,  , f, g [5] 8º contiene todas las de 7 (2º)
5 -> a, b,  , d,  , f, g [5] 9º le falta una de 6 (7º), la e
0 -> a, b, c,  , e, f, g [6] 6º contiene todas las de 7 (2º) y obtiene la d restando de 8 (4º)
6 -> a, b,  , d, e, f, g [6] 7º único con 6 caracteres restante, obtiene la c restando de 8 (4º)
9 -> a, b, c, d,  , f, g [6] 5º (7 + 4 + g) contiene todas las de 7 (2º) y las de 4 (3º); sobra g
8 -> a, b, c, d, e, f, g [7] 4º
*/

const inputs = data
  .split('\n')
  .map(x => x.split(' | '))
  .map(x => x.splice(0, 1).join())
  .map(x => x.split(' '));

console.log(inputs);

const findoutInputs = function (inp, out) {
  const missingLetter = function (set1, set2) {
    let missing = new Set([...set1]);
    for (let elem of new Set([...set2])) {
      missing.delete(elem);
    }
    let letter = '';
    missing.forEach(x => (letter += x));
    return letter;
  };

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

    const digit0 = new Set(); // a, b, c,  , e, f, g [6] *
    const digit1 = new Set(); //  ,  , c,  ,  , f,   [2] *
    const digit2 = new Set(); // a,  , c, d, e,  , g [5]
    const digit3 = new Set(); // a,  , c, d,  , f, g [5] *
    const digit4 = new Set(); //  , b, c, d,  , f,   [4] *
    const digit5 = new Set(); // a, b,  , d,  , f, g [5] *
    const digit6 = new Set(); // a, b,  , d, e, f, g [6] *
    const digit7 = new Set(); // a,  , c,  ,  , f,   [3] *
    const digit8 = new Set(); // a, b, c, d, e, f, g [7] *
    const digit9 = new Set(); // a, b, c, d,  , f, g [6] *

    for (let j = 0; j < inp[i].length; j++) {
      if (inp[i][j].length === 2) sendLettersToSet(inp[i][j], digit1);
      if (inp[i][j].length === 3) sendLettersToSet(inp[i][j], digit7);
      if (inp[i][j].length === 4) sendLettersToSet(inp[i][j], digit4);
      if (inp[i][j].length === 7) sendLettersToSet(inp[i][j], digit8);
    }

    for (let j = 0; j < inp[i].length; j++) {
      let tempDigit = new Set([...digit7, ...digit4]);
      if (inp[i][j].length === 6) {
        let counter = 0;
        for (let letter of inp[i][j]) {
          if (tempDigit.has(letter)) counter++;
        }
        if (counter === 5) {
          sendLettersToSet(inp[i][j], digit9);
        }
      }
      segments.g = missingLetter(digit9, tempDigit);
    }

    for (let j = 0; j < inp[i].length; j++) {
      let tempDigit = new Set([...digit7]);
      if (inp[i][j].length === 6 && inp[i][j] !== [...digit9].join('')) {
        let counter = 0;
        for (let letter of inp[i][j]) {
          if (tempDigit.has(letter)) counter++;
        }
        if (counter === 3) {
          sendLettersToSet(inp[i][j], digit0);
        }
      }
    }

    for (let j = 0; j < inp[i].length; j++) {
      if (
        inp[i][j].length === 6 &&
        inp[i][j] !== [...digit9].join('') &&
        inp[i][j] !== [...digit0].join('')
      ) {
        sendLettersToSet(inp[i][j], digit6);
      }
    }

    for (let j = 0; j < inp[i].length; j++) {
      let tempDigit = new Set([...digit7]);
      if (inp[i][j].length === 5) {
        let counter = 0;
        for (let letter of inp[i][j]) {
          if (tempDigit.has(letter)) counter++;
        }
        if (counter === 3) {
          sendLettersToSet(inp[i][j], digit3);
        }
      }
    }

    for (let j = 0; j < inp[i].length; j++) {
      let tempDigit = new Set([...digit6]);
      if (inp[i][j].length === 5 && inp[i][j] !== [...digit6].join('')) {
        let counter = 0;
        for (let letter of inp[i][j]) {
          if (tempDigit.has(letter)) counter++;
        }
        if (counter === 5) {
          sendLettersToSet(inp[i][j], digit5);
        }
      }
    }

    segments.a = missingLetter(digit7, digit1);
    segments.b = missingLetter(digit9, digit3);
    segments.c = missingLetter(digit8, digit6);
    segments.d = missingLetter(digit8, digit0);
    segments.e = missingLetter(digit8, digit9);

    let letters = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    for (let value of Object.values(segments)) {
      letters.delete(value);
    }
    segments.f = [...letters].toString();

    console.log(segments);

    for (let i = 0; i < out.length; i++) {
      for (let j = 0; j < out[i].length; j++) {
        if (out[i][j].length === 2) out[i][j] = 1;
        if (out[i][j].length === 3) out[i][j] = 7;
        if (out[i][j].length === 4) out[i][j] = 4;
        if (out[i][j].length === 7) out[i][j] = 8;
        if (out[i][j].length === 6 && !out[i][j].includes(segments.e))
          out[i][j] = 9;
        if (out[i][j].length === 6 && !out[i][j].includes(segments.c))
          out[i][j] = 6;
        if (out[i][j].length === 6 && !out[i][j].includes(segments.d))
          out[i][j] = 0;
        if (
          out[i][j].length === 5 &&
          !out[i][j].includes(segments.c) &&
          !out[i][j].includes(segments.e)
        )
          out[i][j] = 5;
        if (
          out[i][j].length === 5 &&
          !out[i][j].includes(segments.b) &&
          !out[i][j].includes(segments.e)
        )
          out[i][j] = 3;
        if (
          out[i][j].length === 5 &&
          !out[i][j].includes(segments.b) &&
          !out[i][j].includes(segments.f)
        )
          out[i][j] = 2;
      }
    }
  }

  const solution = [];
  for (let el of out) {
    solution.push(Number(el.join('')));
  }
  const answer = solution.reduce((a, b) => a + b, 0);
  console.log(solution, answer);
};

findoutInputs(inputs, outputs); // 988760 too low (61228 for the test)

console.log(outputs);
console.log(outputs[0].join(''));
let aaa = [8, 3, 9, 4];
console.log(aaa.join(''));

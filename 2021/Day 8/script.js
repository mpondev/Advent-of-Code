'use strict';

/*
DAY 8 (I)
In the output values, how many times do digits 1, 4, 7, or 8 appear?
 */

import data from './inputTest.js';

const output = data
  .split('\n')
  .map(x => x.split(' | '))
  .map(x => x.splice(1).join())
  .map(x => x.split(' '));

console.log(output);

const counter = function (array) {
  let cont = 0;
  array.forEach(x =>
    x.forEach(y => {
      if (y.length === 2 || y.length === 4 || y.length === 3 || y.length === 7)
        cont++;
    })
  );
  return cont;
};

console.log(counter(output)); // 445

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

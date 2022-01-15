/*
 * DAY 7
 *
 * Rules that specify the required contents for 9 bag types:
 *  - light red bags contain 1 bright white bag, 2 muted yellow bags.
 *  - dark orange bags contain 3 bright white bags, 4 muted yellow bags.
 *  - bright white bags contain 1 shiny gold bag.
 *  - muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
 *  - shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
 *  - dark olive bags contain 3 faded blue bags, 4 dotted black bags.
 *  - vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
 *  - faded blue bags contain no other bags.
 *  - dotted black bags contain no other bags.
 *
 * You have a shiny gold bag. If you wanted to carry it in at least one other bag, how many
 * different bag colors would be valid for the outermost bag?
 * So, in this example, the number of bag colors that can eventually contain at least one shiny
 * gold bag is 4.
 *
 * How many bag colors can eventually contain at least one shiny gold bag?
 */

import rules from './data.js';
// Remove 'bags', 'bag' and dots and prepare array
const rulesArr = rules.replace(/( bags)|( bag)|(\.)/g, '').split(/\n/);

let outermostBags = [];
rulesArr.forEach(rule => {
  outermostBags.push(rule.split(' ')[0] + ' ' + rule.split(' ')[1]);
});

let innerBags = [];
rulesArr.forEach(rule => {
  innerBags.push(rule.slice(rule.indexOf('contain') + 8));
});

// Store possible colors starting with the color target
let target = ['shiny gold'];
let index = 0;

while (index < target.length) {
  let color = target[index];
  innerBags.filter((rule, i) => {
    if (rule.includes(color)) {
      target.push(outermostBags[i]);
    }
  });
  index++;
}

// Remove first 'shiny gold' introduced as target
target.shift();

// Remove duplicate elements
let result = new Set(target);

console.log(
  `Part I. There are ${result.size} bag colors that can eventually contain at least one shiny gold bag`
);

/*
 * DAY 7 (II)
 *
 * How many individual bags are required inside your single shiny gold bag?
 */
// Una función que vaya buscando colores en 'target' (inicial más los que se añaden) y al
// encontrarlos busque en su inteior (mismo índice), sume todas las bolsas que hay y vuelva
// a buscar esos colores, multiplicando el interior por las bolsas que hay de ese color
// Si no hay nada se acaba la iteración y no suma nada

// let bagsCount = 0;
// let targetColor = ['shiny gold'];
// let targetNumber = [1];
// index = 0;
// const bagsSearcher = function (color) {
//   outermostBags.filter((bag, i) => {
//     if (bag.includes(color)) {
//       if (innerBags[i].includes('no other')) {
//         return 0;
//       } else {
//         let innerQty = innerBags[i].match(/\d+/g);
//         let innerColor = innerBags[i]
//           .match(/(?<=\d) \D*/g)
//           .map(val => val.trim().replace(',', ''));
//         targetColor = targetColor.concat(innerColor);
//         targetNumber = targetNumber.concat(innerQty);
//         let innQty = innerQty.reduce((x, y) => Number(x) + Number(y), 0);

//         bagsCount =
//           bagsCount +
//           innerQty +
//           targetNumber[index] * bagsSearcher(targetColor[index + 1]);

//         console.log(innerQty);
//         console.log(innQty);
//         console.log(innerColor);
//         console.log(bagsCount);
//         console.log(targetColor);
//         console.log(targetNumber);
//       }
//     }
//   });
// };

// while (index < target.length) {
//   bagsSearcher(target[index]);
//   index++;
// }

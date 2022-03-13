/*
DAY 5 (I)
To avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a 2 or larger - a total of 5 points.

Consider only horizontal and vertical lines. At how many points do at least two lines overlap?
 */

import data from './input.js';

// Format data to get --> [x1, y1, x2, y2]
const vents = data.split('\n').map(x =>
  x
    .split(' -> ')
    .map(y => y.split(','))
    .flat()
    .map(Number)
);

// Extract horizontal (y1 = y2) and vertical lines (x1 = x2)
const linesHor = []; // 147 horizontal lines
const linesVer = []; // 168 vertical lines
for (let [x1, y1, x2, y2] of vents) {
  if (x1 === x2) {
    y1 > y2 ? linesVer.push([x1, y2, x2, y1]) : linesVer.push([x1, y1, x2, y2]);
  }
  if (y1 === y2) {
    x1 > x2 ? linesHor.push([x2, y2, x1, y1]) : linesHor.push([x1, y1, x2, y2]);
  }
}
console.log(linesHor);
console.log(linesHor[0]);
console.log(linesVer);
console.log(linesVer[0]);

// Iterate over all horizontal lines and check crosses with vertical lines and overlaps with other horizontal lines
let crosses = 0;
for (let [x1, y1, x2, y2] of linesHor) {
  for (let [a1, b1, a2, b2] of linesVer) {
    if (x1 <= a1 && a1 <= x2 && b1 <= y1 && y1 <= b2) {
      crosses++;
    }
  }
  for (let [a1, b1, a2, b2] of linesHor) {
    let overlap = 0;
    if (y1 === b1) {
      if (a1 <= x1 && a2 <= x2) {
        overlap = a2 - x1;
      } else if (a1 <= x2 && x2 <= a2) {
        overlap = x2 - a1;
      } else if (x1 <= a1 && a2 <= x2) {
        overlap = a2 - a1;
      }
    }
    crosses += overlap;
  }
}
for (let [x1, y1, x2, y2] of linesVer) {
  for (let [a1, b1, a2, b2] of linesVer) {
    let overlap = 0;
    if (x1 === a1) {
      if (b1 <= y1 && y1 <= b2 && b2 <= y2) {
        overlap = b2 - y1;
      } else if (b1 >= y1 && y2 <= b2 && b1 <= y2) {
        overlap = y2 - b1;
      } else if (y1 <= b1 && b2 <= b2) {
        overlap = b2 - b1;
      }
    }
    crosses += overlap;
  }
}

console.log(crosses); // 2729 crosses is too low (24696 possibilities)
// 52768 is wrong
// 53695 is wrong
// 108252 is wrong
// 108588 is wrong

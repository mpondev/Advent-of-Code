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

// Extract horizontal and vertical lines (x1 = x2 or y1 = y2)
const linesHorVer = [];
for (let [x1, y1, x2, y2] of vents) {
  if (x1 === x2 || y1 === y2) {
    linesHorVer.push([x1, y1, x2, y2]);
  }
}
console.log(linesHorVer);

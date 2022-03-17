/*
DAY 5 (I)
To avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a 2 or larger - a total of 5 points.

Consider only horizontal and vertical lines. At how many points do at least two lines overlap?
 */

import data from './input.js';

// Format data to get --> [x1, y1, x2, y2]
const lines = data.split('\n').map(x =>
  x
    .split(' -> ')
    .map(y => y.split(','))
    .flat()
    .map(Number)
);

const overlap = function (vents, diagonal) {
  const ventMap = {};
  let overlaps = 0;

  for (let i = 0; i < vents.length; i++) {
    const [x1, y1, x2, y2] = vents[i];
    if (y1 === y2) {
      for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        if (!ventMap[[x, y1]]) ventMap[[x, y1]] = 1;
        else {
          ventMap[[x, y1]]++;
          if (ventMap[[x, y1]] === 2) overlaps++;
        }
      }
    } else if (x1 === x2) {
      for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        if (!ventMap[[x1, y]]) ventMap[[x1, y]] = 1;
        else {
          ventMap[[x1, y]]++;
          if (ventMap[[x1, y]] === 2) overlaps++;
        }
      }
    } else if (diagonal) {
      let x = x1;
      let y = y1;

      if (!ventMap[[x, y]]) ventMap[[x, y]] = 1;
      else {
        ventMap[[x, y]]++;
        if (ventMap[[x, y]] === 2) overlaps++;
      }

      while (x !== x2 && y !== y2) {
        if (x > x2) x--;
        if (x < x2) x++;
        if (y > y2) y--;
        if (y < y2) y++;

        if (!ventMap[[x, y]]) ventMap[[x, y]] = 1;
        else {
          ventMap[[x, y]]++;
          if (ventMap[[x, y]] === 2) overlaps++;
        }
      }
    }
  }
  console.log(overlaps);
};

overlap(lines); // 3990

/*
DAY 5 (II)
Now consider horizontal, vertical and diagonal (45 degrees) lines. At how many points do at least two lines overlap?
 */

overlap(lines, true); // 21305

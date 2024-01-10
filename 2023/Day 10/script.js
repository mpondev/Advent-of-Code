'use strict';

/*
DAY 10 (I)
How many steps along the loop does it take to get from the starting position to the point farthest from the starting position?
 */

import data from './input.js';

const loop = data.split('\n').map(el => el.split(''));

const visitedTiles = [];

// Find S as starting point
function findS(loop) {
  let x, y;
  for (let [col, line] of loop.entries()) {
    for (let [row, char] of line.entries()) {
      if (char === 'S') {
        y = col;
        x = row;
      }
    }
  }
  return [y, x];
}

function getLoopLength(loop) {
  let tiles = 0;
  let [y, x] = findS(loop);

  // Start checking north and then change direction clockwise
  const isDirection = {
    north: true,
    east: false,
    south: false,
    west: false,
  };

  // Keep moving until the loop has been completed
  let loopCompleted = false;

  const completeLoop = () => {
    tiles++;
    loopCompleted = true;
  };

  // Check up (| 7 F)
  const checkNorth = () => {
    if (loop[y - 1]) {
      switch (loop[y - 1][x]) {
        case 'S':
          visitedTiles.push(`${y - 1}-${x}`);
          completeLoop();
          break;
        case '|':
          visitedTiles.push(`${y - 1}-${x}`);
          y--;
          tiles++;
          break;
        case '7':
          visitedTiles.push(`${y - 1}-${x}`);
          y--;
          tiles++;
          isDirection.west = true;
          isDirection.north = false;
          break;
        case 'F':
          visitedTiles.push(`${y - 1}-${x}`);
          y--;
          tiles++;
          isDirection.east = true;
          isDirection.north = false;
          break;
        default:
          isDirection.north = false;
          isDirection.east = true;
          break;
      }
    } else {
      isDirection.north = false;
      isDirection.east = true;
    }
  };

  // Check right (- J 7)
  const checkEast = () => {
    switch (loop[y][x + 1]) {
      case 'S':
        visitedTiles.push(`${y}-${x + 1}`);
        completeLoop();
        break;
      case '-':
        visitedTiles.push(`${y}-${x + 1}`);
        x++;
        tiles++;
        break;
      case 'J':
        visitedTiles.push(`${y}-${x + 1}`);
        x++;
        tiles++;
        isDirection.east = false;
        isDirection.north = true;
        break;
      case '7':
        visitedTiles.push(`${y}-${x + 1}`);
        x++;
        tiles++;
        isDirection.east = false;
        isDirection.south = true;
        break;
      default:
        isDirection.east = false;
        isDirection.south = true;
        break;
    }
  };

  // Check down (| L J)
  const checkSouth = () => {
    switch (loop[y + 1][x]) {
      case 'S':
        visitedTiles.push(`${y + 1}-${x}`);
        completeLoop();
        break;
      case '|':
        visitedTiles.push(`${y + 1}-${x}`);
        y++;
        tiles++;
        break;
      case 'L':
        visitedTiles.push(`${y + 1}-${x}`);
        y++;
        tiles++;
        isDirection.south = false;
        isDirection.east = true;
        break;
      case 'J':
        visitedTiles.push(`${y + 1}-${x}`);
        y++;
        tiles++;
        isDirection.south = false;
        isDirection.west = true;
        break;
      default:
        isDirection.south = false;
        isDirection.west = true;
        break;
    }
  };

  // Check left (- L F)
  const checkWest = () => {
    switch (loop[y][x - 1]) {
      case 'S':
        visitedTiles.push(`${y}-${x - 1}`);
        completeLoop();
        break;
      case '-':
        visitedTiles.push(`${y}-${x - 1}`);
        x--;
        tiles++;
        break;
      case 'L':
        visitedTiles.push(`${y}-${x - 1}`);
        x--;
        tiles++;
        isDirection.west = false;
        isDirection.north = true;
        break;
      case 'F':
        visitedTiles.push(`${y}-${x - 1}`);
        x--;
        tiles++;
        isDirection.west = false;
        isDirection.south = true;
        break;
      default:
        isDirection.west = false;
        isDirection.north = true;
        break;
    }
  };

  while (!loopCompleted) {
    isDirection.north && checkNorth();
    isDirection.east && checkEast();
    isDirection.south && checkSouth();
    isDirection.west && checkWest();
  }

  return tiles;
}

const farthestPoint = getLoopLength(loop) / 2;

console.log(farthestPoint); // 6931 (Test: 4, 8)

/*
DAY 10 (II)
Figure out whether you have time to search for the nest by calculating the area within the loop. How many tiles are enclosed by the loop?
 */

function findInner() {
  // Knowing the loop tiles (visitedTiles), remove extra pipes
  const cleanLoop = [];

  for (let i = 0; i < loop.length; i++) {
    cleanLoop.push([]);
    for (let j = 0; j < loop[0].length; j++) {
      cleanLoop[i].push(visitedTiles.includes(`${i}-${j}`) ? loop[i][j] : '.');
    }
  }

  let [y, x] = findS(cleanLoop);

  // Change S by correct pipe piece
  let sFrom, sTo;
  const north = /[\|F7]/;
  const east = /[\-7J]/;
  const south = /[\|JL]/;

  // Get S first direction. Because two pipes connect to S, there are only 3 possibilities
  if (cleanLoop[y - 1] && cleanLoop[y - 1][x].match(north)) {
    sTo = 'north';
  } else if (cleanLoop[y][x + 1] && cleanLoop[y][x + 1].match(east)) {
    sTo = 'east';
  } else if (cleanLoop[y + 1] && cleanLoop[y + 1][x].match(south)) {
    sTo = 'south';
  }

  // Get direction from where S comes from
  if (sTo !== 'south') {
    if (
      cleanLoop[y + 1] &&
      (cleanLoop[y + 1][x] === '|' ||
        cleanLoop[y + 1][x] === 'J' ||
        cleanLoop[y + 1][x] === 'L')
    ) {
      sFrom = 'south';
    }
  } else if (
    cleanLoop[y][x - 1] === '-' ||
    cleanLoop[y][x - 1] === 'F' ||
    cleanLoop[y][x - 1] === 'L'
  ) {
    sFrom = 'west';
  } else if (
    cleanLoop[y - 1][x] === '|' ||
    cleanLoop[y - 1][x] === 'F' ||
    cleanLoop[y - 1][x] === 'J'
  ) {
    sFrom = 'south';
  }

  if (sTo === 'north') {
    cleanLoop[y][x] = sFrom === 'south' ? '|' : sFrom === 'east' ? 'L' : 'J';
  }
  if (sTo === 'east') {
    cleanLoop[y][x] = sFrom === 'south' ? 'F' : sFrom === 'west' ? '-' : 'L';
  }
  if (sTo === 'south') {
    cleanLoop[y][x] = sFrom === 'west' ? '7' : sFrom === 'north' ? '|' : 'F';
  }

  // Get inner tiles by scanning each line: each time I find |, 7 or F boolean isInner will change
  let inner = 0;
  let isInner = false;

  for (let line of cleanLoop) {
    isInner = false;

    line.forEach(char => {
      if (char === '|' || char === '7' || char === 'F') isInner = !isInner;
      if (isInner && char.match(/[^\|\-JL7FS]/)) {
        inner++;
      }
    });
  }

  return inner;
}

console.log(findInner());

// 357 (Test: 4, 4, 8, 10)

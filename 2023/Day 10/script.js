'use strict';

/*
DAY 10 (I)
How many steps along the loop does it take to get from the starting position to the point farthest from the starting position?
 */

import data from './input.js';

const loop = data.split('\n').map(el => el.split(''));

function getLoopLength(loop) {
  let tiles = 0;
  let x, y;

  // Find S
  for (let [col, line] of loop.entries()) {
    for (let [row, char] of line.entries()) {
      if (char === 'S') {
        y = col;
        x = row;
      }
    }
  }

  // Start checking north and then change direction clockwise
  const direction = {
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

  // Check down (| 7 F)
  const checkNorth = () => {
    switch (loop[y - 1][x]) {
      case 'S':
        completeLoop();
        break;
      case '|':
        y--;
        tiles++;
        direction.north = true;
        direction.east = direction.south = direction.west = false;
        break;
      case '7':
        y--;
        tiles++;
        direction.west = true;
        direction.north = direction.east = direction.south = false;
        break;
      case 'F':
        y--;
        tiles++;
        direction.east = true;
        direction.south = direction.west = direction.north = false;
        break;
      default:
        direction.north = direction.south = direction.west = false;
        direction.east = true;
        break;
    }
  };

  // Check right (- J 7)
  const checkEast = () => {
    switch (loop[y][x + 1]) {
      case 'S':
        completeLoop();
        break;
      case '-':
        x++;
        tiles++;
        direction.east = true;
        direction.south = direction.west = direction.north = false;
        break;
      case 'J':
        x++;
        tiles++;
        direction.north = true;
        direction.east = direction.south = direction.west = false;
        break;
      case '7':
        x++;
        tiles++;
        direction.south = true;
        direction.east = direction.west = direction.north = false;
        break;
      default:
        direction.south = true;
        direction.west = direction.north = direction.east = false;
        break;
    }
  };

  // Check down (| L J)
  const checkSouth = () => {
    switch (loop[y + 1][x]) {
      case 'S':
        completeLoop();
        break;
      case '|':
        y++;
        tiles++;
        direction.south = true;
        direction.east = direction.west = direction.north = false;
        break;
      case 'L':
        y++;
        tiles++;
        direction.east = true;
        direction.south = direction.west = direction.north = false;
        break;
      case 'J':
        y++;
        tiles++;
        direction.west = true;
        direction.north = direction.east = direction.south = false;
        break;
      default:
        direction.west = true;
        direction.north = direction.east = direction.south = false;
        break;
    }
  };

  // Check left (- L F)
  const checkWest = () => {
    switch (loop[y][x - 1]) {
      case 'S':
        completeLoop();
        break;
      case '-':
        x--;
        tiles++;
        direction.west = true;
        direction.north = direction.east = direction.south = false;
        break;
      case 'L':
        x--;
        tiles++;
        direction.north = true;
        direction.east = direction.south = direction.west = false;
        break;
      case 'F':
        x--;
        tiles++;
        direction.south = true;
        direction.east = direction.west = direction.north = false;
        break;
      default:
        direction.north = true;
        direction.east = direction.south = direction.west = false;
        break;
    }
  };

  function move() {
    direction.north && checkNorth();
    direction.east && checkEast();
    direction.south && checkSouth();
    direction.west && checkWest();
  }

  while (!loopCompleted) {
    move();
  }

  return tiles;
}

const target = getLoopLength(loop) / 2;

console.log(target); // 6931 (Test: 4, 8)

/*
DAY 10 (II)
Figure out whether you have time to search for the nest by calculating the area within the loop. How many tiles are enclosed by the loop?
 */

// (Test: 4, 4, 8, 10)

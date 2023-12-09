'use strict';

/*
DAY 3 (I)
What is the sum of all of the part numbers in the engine schematic?
 */

import data from './input.js';

// Prepare data (add a ring of '.' around all data block)
const engineSchematic = data.split('\n').map(line => '.' + line + '.');

const extraLine = '.'.repeat(engineSchematic[0].length);
engineSchematic.unshift(extraLine);
engineSchematic.push(extraLine);

function partNumbers() {
  let partNumbersSum = 0;

  for (let [lineIndex, line] of engineSchematic.entries()) {
    const symbols = /[^\.]/;
    // Add an extra digit when searching numbers to avoid partial duplicates (..316..@....16....)
    const numbers = line.match(/(\d+)(.)/g);

    if (numbers) {
      for (let number of numbers) {
        const firstIndex = line.indexOf(number);
        const lastIndex = firstIndex + number.length;

        // Check if number is surrounded by at least one symbol
        if (
          engineSchematic[lineIndex - 1]
            .substring(firstIndex - 1, lastIndex)
            .match(symbols) ||
          line[firstIndex - 1].match(symbols) ||
          line[lastIndex - 1].match(symbols) ||
          engineSchematic[lineIndex + 1]
            .substring(firstIndex - 1, lastIndex)
            .match(symbols)
        ) {
          // Remove extra digit to add the number to the sum
          partNumbersSum += Number(number.slice(0, -1));
        }
      }
    }
  }

  console.log(partNumbersSum);
}

partNumbers(); // 521515 (Test: 4361)

/*
DAY 3 (II)
What is the sum of all of the gear ratios in your engine schematic?
 */

function gearRatioSum() {
  let gearRatioSum = 0;

  for (let [lineIndex, line] of engineSchematic.entries()) {
    let topLine = engineSchematic[lineIndex - 1];
    let bottomLine = engineSchematic[lineIndex + 1];

    for (let i = 0; i < line.length; i++) {
      let gearNumbers = [];

      if (line[i] === '*') {
        // Check top numbers
        if (topLine[i].match(/\d/)) {
          let number = topLine[i];
          if (topLine[i + 1].match(/\d/)) {
            number += topLine[i + 1];
            topLine[i + 2].match(/\d/) && (number += topLine[i + 2]);
          }
          if (topLine[i - 1].match(/\d/)) {
            number = topLine[i - 1] + number;
            topLine[i - 2].match(/\d/) && (number = topLine[i - 2] + number);
          }

          gearNumbers.push(number);
        } else {
          if (topLine[i + 1].match(/\d/)) {
            gearNumbers.push(topLine.substring(i + 1, i + 4).match(/\d+/)[0]);
          }
          if (topLine[i - 1].match(/\d/)) {
            gearNumbers.push(topLine.substring(i - 3, i).match(/\d+/)[0]);
          }
        }

        // Check right numbers
        if (line[i + 1].match(/\d/)) {
          gearNumbers.push(line.substring(i + 1, i + 4).match(/\d+/)[0]);
        }

        // Check left numbers
        if (line[i - 1].match(/\d/)) {
          gearNumbers.push(line.substring(i - 3, i).match(/\d+/)[0]);
        }

        // Check bottom numbers
        if (bottomLine[i].match(/\d/)) {
          let number = bottomLine[i];
          if (bottomLine[i + 1].match(/\d/)) {
            number += bottomLine[i + 1];
            bottomLine[i + 2].match(/\d/) && (number += bottomLine[i + 2]);
          }
          if (bottomLine[i - 1].match(/\d/)) {
            number = bottomLine[i - 1] + number;
            bottomLine[i - 2].match(/\d/) &&
              (number = bottomLine[i - 2] + number);
          }
          gearNumbers.push(number);
        } else {
          if (bottomLine[i + 1].match(/\d/)) {
            let number = bottomLine[i + 1];
            if (bottomLine[i + 2].match(/\d/)) {
              number += bottomLine[i + 2];
              bottomLine[i + 3].match(/\d/) && (number += bottomLine[i + 3]);
            }
            gearNumbers.push(number);
          }
          if (bottomLine[i - 1].match(/\d/)) {
            let number = bottomLine[i - 1];
            if (bottomLine[i - 2].match(/\d/)) {
              number = bottomLine[i - 2] + number;
              bottomLine[i - 3].match(/\d/) &&
                (number = bottomLine[i - 3] + number);
            }
            gearNumbers.push(number);
          }
        }
      }
      gearNumbers.length === 2 &&
        (gearRatioSum += gearNumbers.reduce(
          (a, b) => Number(a) * Number(b),
          1
        ));
    }
  }
  console.log(gearRatioSum);
}

gearRatioSum(); // 69527306 (Test: 467835)

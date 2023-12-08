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

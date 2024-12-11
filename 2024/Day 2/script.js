'use strict';

/*
DAY 2 (I)
Analyze the unusual data from the engineers. How many reports are safe?
 */

import data from './input.js';

const reports = data.split('\n').map(report => report.split(' ').map(Number));

function safeReports() {
  let safeReports = 0;

  reports.forEach(report => {
    let safeLevels = 0;

    for (let i = 1; i < report.length; i++) {
      if (report[i] >= report[i - 1] + 1 && report[i] <= report[i - 1] + 3) {
        safeLevels++;
      } else {
        break;
      }
    }
    if (safeLevels === report.length - 1) {
      safeReports++;
    }
  });

  reports.forEach(report => {
    let safeLevels = 0;

    for (let i = 1; i < report.length; i++) {
      if (report[i] <= report[i - 1] - 1 && report[i] >= report[i - 1] - 3) {
        safeLevels++;
      } else {
        break;
      }
    }
    if (safeLevels === report.length - 1) {
      safeReports++;
    }
  });

  return safeReports;
}

console.log(safeReports());

// 299 (Test: 2)

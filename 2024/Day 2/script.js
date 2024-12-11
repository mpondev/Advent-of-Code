'use strict';

/*
DAY 2 (I)
Analyze the unusual data from the engineers. How many reports are safe?
 */

import data from './input.js';

const reports = data.split('\n').map(report => report.split(' ').map(Number));

// Function to check the safety criteria
function isSafeReport(report, comparator) {
  for (let i = 1; i < report.length; i++) {
    if (!comparator(report[i], report[i - 1])) {
      return false;
    }
  }
  return true;
}

function safeReports(dampener = false) {
  let safeReportsCount = 0;

  // Comparator functions
  const isSafeIncrease = (current, previous) =>
    current >= previous + 1 && current <= previous + 3;
  const isSafeDecrease = (current, previous) =>
    current <= previous - 1 && current >= previous - 3;

  reports.forEach(report => {
    if (
      isSafeReport(report, isSafeIncrease) ||
      isSafeReport(report, isSafeDecrease) ||
      // Check if the report is safe with one level removed
      (dampener &&
        (isSafeWithOneRemoval(report, isSafeIncrease) ||
          isSafeWithOneRemoval(report, isSafeDecrease)))
    ) {
      safeReportsCount++;
    }
  });

  return safeReportsCount;
}

console.log(safeReports()); // 299 (Test: 2)

/*
DAY 2 (II)
Update your analysis by handling situations where the Problem Dampener can remove a single level from unsafe reports. How many reports are now safe?
 */

// Function to check the safety criteria removing one level
function isSafeWithOneRemoval(report, comparator) {
  for (let i = 0; i < report.length; i++) {
    const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
    if (isSafeReport(modifiedReport, comparator)) {
      return true;
    }
  }
  return false;
}

console.log(safeReports(true)); // 364 (Test: 4)

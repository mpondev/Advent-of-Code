'use strict';

/*
DAY 7 (I)
Find the rank of every hand in your set. What are the total winnings?
 */

import data from './input.js';

// Dictionary to convert cards to alphabet so we could order hands
const cardConverter = {
  A: 'a',
  K: 'b',
  Q: 'c',
  J: 'd',
  T: 'e',
  9: 'f',
  8: 'g',
  7: 'h',
  6: 'i',
  5: 'j',
  4: 'k',
  3: 'l',
  2: 'm',
};

// Prepare data
const hands = data
  .split('\n')
  .map(hand => hand.split(' '))
  .map(hand => [
    hand[0].replace(/[AKQJT2-9]/gi, card => cardConverter[card]),
    hand[1],
  ]);

function getWinnings(hands) {
  let handsOrdered = {};

  for (let hand of hands) {
    // Break down hand
    let count = {};
    for (let card of hand[0]) {
      count[card] ? (count[card] += 1) : (count[card] = 1);
    }

    let uniqueCards = new Set(Object.keys(count));

    switch (uniqueCards.size) {
      case 1:
        handsOrdered[1]
          ? handsOrdered[1].push(hand)
          : (handsOrdered[1] = [hand]);
        break;
      case 2:
        if (Object.values(count).includes(4)) {
          handsOrdered[2]
            ? handsOrdered[2].push(hand)
            : (handsOrdered[2] = [hand]);
          break;
        } else {
          handsOrdered[3]
            ? handsOrdered[3].push(hand)
            : (handsOrdered[3] = [hand]);
          break;
        }
      case 3:
        if (!Object.values(count).includes(2)) {
          handsOrdered[4]
            ? handsOrdered[4].push(hand)
            : (handsOrdered[4] = [hand]);
          break;
        } else {
          handsOrdered[5]
            ? handsOrdered[5].push(hand)
            : (handsOrdered[5] = [hand]);
          break;
        }
      case 4:
        handsOrdered[6]
          ? handsOrdered[6].push(hand)
          : (handsOrdered[6] = [hand]);
        break;
      default:
        handsOrdered[7]
          ? handsOrdered[7].push(hand)
          : (handsOrdered[7] = [hand]);
        break;
    }
  }

  for (const prop in handsOrdered) {
    handsOrdered[prop].sort();
  }

  const handsOrderedArr = Object.values(handsOrdered).flat().reverse();

  let total = 0;

  for (let i = 0; i < handsOrderedArr.length; i++) {
    total += handsOrderedArr[i][1] * (i + 1);
  }

  console.log(total);
}

getWinnings(hands); // 246163188 (Test: 6440)

/*
DAY 7 (I)
Using the new joker rule, find the rank of every hand in your set. What are the new total winnings?
 */

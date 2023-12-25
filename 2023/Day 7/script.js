'use strict';

/*
DAY 7 (I)
Find the rank of every hand in your set. What are the total winnings?
 */

import data from './input.js';

// Dictionary to convert cards to alphabet so we could order hands
let cardConverter = {
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

let cardConverterJoker = {
  A: 'a',
  K: 'b',
  Q: 'c',
  T: 'd',
  9: 'e',
  8: 'f',
  7: 'g',
  6: 'h',
  5: 'i',
  4: 'j',
  3: 'k',
  2: 'l',
  J: 'm',
};

function getWinnings(data, joker) {
  // Prepare data
  const hands = data
    .split('\n')
    .map(hand => hand.split(' '))
    .map(hand => [
      hand[0].replace(/[AKQJT2-9]/gi, card =>
        joker ? cardConverterJoker[card] : cardConverter[card]
      ),
      hand[1],
    ]);

  let handsOrdered = {};

  for (let hand of hands) {
    // Break down hand
    let count = {};
    for (let card of hand[0]) {
      count[card] ? (count[card] += 1) : (count[card] = 1);
    }

    let uniqueCards;

    if (joker) {
      // Find most repeated card (different of Joker)
      let sortCount = Object.entries(count).sort(([, a], [, b]) => b - a);
      let max =
        sortCount.length === 1
          ? sortCount[0][0]
          : sortCount[0][0] === 'm'
          ? sortCount[1][0]
          : sortCount[0][0];

      if (count['m']) {
        if (max === 'm') {
          hand.push(hand[0]);
        } else {
          count[max] += count['m'];
          delete count['m'];
          hand.push(hand[0].replace(/m/g, max));
        }
      } else {
        hand.push(hand[0]);
      }

      uniqueCards = new Set(hand[2]);
    } else {
      uniqueCards = new Set(Object.keys(count));
    }

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

getWinnings(data, false); // 246163188 (Test: 6440)

/*
DAY 7 (II)
Using the new joker rule, find the rank of every hand in your set. What are the new total winnings?
 */

getWinnings(data, true); // 245794069 (Test: 5905) 229 --> 158

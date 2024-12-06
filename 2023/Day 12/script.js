'use strict';

/*
DAY 12 (I)
For each row, count all of the different arrangements of operational and broken springs that meet the given criteria. What is the sum of those counts?
 */

import data from './inputTest.js';

const records = data.split('\n').map(el => el.split(' '));

function analizeRecord(line) {
  let [springsMap, springsNumbers] = line.split(' ').map(el => el.split(','));
  // if (char === '.') {
  //   return;
  // }
  console.log(springsMap, springsNumbers);
}

// const [springsMap, springsNumbers] = records.map(el => el.split(' '));

console.log(data);
console.log(records);

// (Test: 21)

const line1 = '???.### 1,1,3';
const line2 = '.??..??...?##. 1,1,3';
const line3 = '?#?#?#?#?#?#?#? 1,3,1,6';
const line4 = '????.#...#... 4,1,1';
const line5 = '????.######..#####. 1,6,5';
const line6 = '?###???????? 3,2,1';

analizeRecord(line1);
analizeRecord(line2);
analizeRecord(line3);
analizeRecord(line4);
analizeRecord(line5);
analizeRecord(line6);

/*
analyze the string left to right.

if it starts with a ., discard the . and recursively check again.

if it starts with a ?, replace the ? with a . and recursively check again, AND replace it with a # and recursively check again.

it it starts with a #, check if it is long enough for the first group, check if all characters in the first [grouplength] characters are not '.', and then remove the first [grouplength] chars and the first group number, recursively check again.

at some point you will get to the point of having an empty string and more groups to do - that is a zero. or you have an empty string with zero gropus to do - that is a one.

there are more rules to check than these few, which are up to you to find. but this is a way to work out the solution.
*/

/*
int day12star1(String input) => input.getLines().map(createPermutations).sum;

int day12star2(String input) =>
    input.getLines().map(unfold).map(createPermutations).sum;

String unfold(String line) {
  final [springs, config] = line.split(' ');
  final springConfig = config.split(',').map(int.parse);
  final modSprings = <String>[];
  final modConfig = <int>[];
  for (var i = 0; i < 5; i++) {
    modSprings.add(springs);
    modConfig.addAll(springConfig);
  }
  return '${modSprings.join('?')} ${modConfig.join(',')}';
}

int createPermutations(String line) {
  final [allSprings, springCondition] = line.split(' ');
  final conditions = springCondition.split(',').map(int.parse).toList();
  final springs = allSprings.split('');
  var state = {(group: 0, amount: 0): 1};
  var nextState = <({int group, int amount}), int>{};
  var brokenSpringsLeft = springs.where((element) => element != '.').length;
  final minRequiredBrokenSpringsLeft = [];
  for (var i = 0; i <= conditions.length; i++) {
    minRequiredBrokenSpringsLeft.add(conditions.skip(i).sum);
  }
  for (final spring in springs) {
    if (spring != '.') {
      brokenSpringsLeft--;
    }
    for (final MapEntry(key: (:group, :amount), value: permutations)
        in state.entries) {
      // increase amount of broken springs for the current group
      // but only if the maximum of broken springs the current group hasn't beed reached
      if (spring == '#' || spring == '?') {
        if (group < conditions.length && amount < conditions[group]) {
          nextState[(group: group, amount: amount + 1)] = permutations;
        }
      }

      // end current group if amount of broken springs equals the required amount
      // or keep going if there are no broken springs in the current group
      if (spring == '.' || spring == '?') {
        if (amount == 0) {
          // merge permutation count with other group that ended this loop
          nextState.update(
            (group: group, amount: 0),
            (value) => value + permutations,
            ifAbsent: () => permutations,
          );
        } else if (amount == conditions[group]) {
          // merge permutation count with other group that's already been ended in a previous loop
          nextState.update(
            (group: group + 1, amount: 0),
            (value) => value + permutations,
            ifAbsent: () => permutations,
          );
        }
      }
    }

    // remove all states that can't be finished because there aren't enough broken springs left
    nextState.removeWhere(
      (key, value) =>
          brokenSpringsLeft + key.amount <
          minRequiredBrokenSpringsLeft[key.group],
    );

    state.clear();
    (state, nextState) = (nextState, state);
  }

  return state.values.sum;
}
*/
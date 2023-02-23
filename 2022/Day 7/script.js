'use strict';

/*
DAY 7 (I)
Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?
 */

import data from './inputTest.js';

const input = data.split('\n');

function findFilesystem(input) {
  // Each folder contains property 'dirs' to store files and directories
  const filesystem = {
    name: 'root',
    size: 0,
    dirs: {},
  };
  let currDir = filesystem;

  input.forEach(line => {
    if (line.startsWith('$')) {
      const [_, cmd, ...rest] = line.split(' ');
      // If line is a command:
      switch (cmd) {
        // files and directories are only shown if command 'ls' appears, so I dismiss it
        case 'ls':
          break;
        case 'cd':
          if (rest[0] === '..') {
            currDir = currDir.parent;
          } else {
            currDir = createChild(currDir, rest[0]);
          }
          break;
      }
      // If the line is not a command it will be a file or a folder:
    } else {
      const [size, name] = line.split(' ');
      if (size === 'dir') {
        createChild(currDir, name);
      } else {
        const child = createChild(currDir, name, false);
        child.size = +size;
      }
    }
  });

  function createChild(currDir, name, isDir = true) {
    if (!currDir.dirs[name]) {
      const child = { name, size: 0, dirs: {}, parent: currDir, isDir };
      currDir.dirs[name] = child;
    }
    return currDir.dirs[name];
  }

  function sizeSearch(filesystem) {
    let size = filesystem.size;
    for (let name in filesystem.dirs) {
      size += sizeSearch(filesystem.dirs[name]);
    }
    if (filesystem.isDir) {
      if (size <= 100000) answer += size;
      dirStruct.push([size, filesystem.name]);
    }
    return (filesystem.size = size);
  }

  let answer = 0;
  const dirStruct = [];

  sizeSearch(filesystem);
  console.log(filesystem);
  console.log(answer);
}

findFilesystem(input); // 2031851 (Tests: 95437)

/*
DAY 7 (II)
Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?
 */

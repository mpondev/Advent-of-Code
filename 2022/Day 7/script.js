'use strict';

/*
DAY 7 (I)
Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?
 */

import data from './input.js';

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
    // If line is a command:
    if (line.startsWith('$')) {
      const [_, cmd, ...rest] = line.split(' ');
      // files and directories are only shown if command 'ls' appears, so I dismiss it
      if (cmd === 'cd') {
        if (rest[0] === '..') {
          currDir = currDir.parent;
        } else {
          currDir = createChild(currDir, rest[0]);
        }
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

  // Function to add properties (files and directories):
  function createChild(currDir, name, isDir = true) {
    const child = { name, size: 0, dirs: {}, parent: currDir, isDir };
    if (!currDir.dirs[name]) {
      currDir.dirs[name] = child;
    }
    return currDir.dirs[name];
  }

  // Recursive function to calculate the size of each directory by adding up the sizes of all its subdirectories. It also keeps track of any directories with a size less than or equal to 100000
  function sizeSearch(filesystem) {
    let size = filesystem.size;
    for (let name in filesystem.dirs) {
      size += sizeSearch(filesystem.dirs[name]);
    }
    if (filesystem.isDir) {
      if (size <= 100000) answer += size;
      dirStructure.push([size, filesystem.name]);
    }
    return (filesystem.size = size);
  }

  let answer = 0;
  const dirStructure = [];

  sizeSearch(filesystem);

  console.log(
    `The sum of the total sizes of directories with a total size of at most 100000 is ${answer}`
  );

  const diskSpace = 70000000;
  const updateSize = 30000000;
  const spaceToDelete = updateSize - (diskSpace - filesystem.size);
  dirStructure.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < dirStructure.length; i++) {
    if (dirStructure[i][0] >= spaceToDelete) {
      console.log(
        `The smallest directory size to delete is ${dirStructure[i][0]}`
      );
      break;
    }
  }
}

findFilesystem(input); // 2031851 (Tests: 95437)

/*
DAY 7 (II)
Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?
 */

// 2568781 (Tests: 24933642)

function maze(arr, paths = null, solutions = []) {
  if (paths === null) {
    paths = [['', 0, 0, arr]];
  }
  let newPaths = [];

  // check every direction for the finish
  paths.forEach((path) => {
    if (arr[path[1] + 1] !== undefined && arr[path[1] + 1][path[2]] === 'e') {
      solutions.push(path[0] + 'D');
    }
    if (arr[path[1]][path[2] + 1] === 'e') {
      solutions.push(path[0] + 'R');
    }
    if (arr[path[1] - 1] !== undefined && arr[path[1] - 1][path[2]] === 'e') {
      solutions.push(path[0] + 'U');
    }
    if (arr[path[1]][path[2] - 1] === 'e') {
      solutions.push(path[0] + 'L');
    }
  });

  if (paths.length === 0) {
    if (solutions.length) {
      return solutions;
    } else {
      return console.log('No solution found.');
    }
  }

  // check every direction for an opening
  paths.forEach((path) => {
    // console.log(path);
    if (arr[path[1] + 1] !== undefined && path[3][path[1] + 1][path[2]] === ' ' && path[0][path[0].length - 1] !== 'U') {
      let newMarkedArray = copy(path[3]);
      newMarkedArray[path[1] + 1][path[2]] = '-';
      newPaths.push([path[0] + 'D', path[1] + 1, path[2], newMarkedArray]);
    }
    if (path[3][path[1]][path[2] + 1] === ' ' && path[0][path[0].length - 1] !== 'L') {
      let newMarkedArray = copy(path[3]);
      newMarkedArray[path[1]][path[2] + 1] = '-';
      newPaths.push([path[0] + 'R', path[1], path[2] + 1, newMarkedArray]);
    }
    if (arr[path[1] - 1] !== undefined && path[3][path[1] - 1][path[2]] === ' ' && path[0][path[0].length - 1] !== 'D') {
      let newMarkedArray = copy(path[3]);
      newMarkedArray[path[1] - 1][path[2]] = '-';
      newPaths.push([path[0] + 'U', path[1] - 1, path[2], newMarkedArray]);
    }
    if (path[3][path[1]][path[2] - 1] === ' ' && path[0][path[0].length - 1] !== 'R') {
      let newMarkedArray = copy(path[3]);
      newMarkedArray[path[1]][path[2] - 1] = '-';
      newPaths.push([path[0] + 'L', path[1], path[2] - 1, newMarkedArray]);
    }
  });

  return maze(arr, newPaths, solutions);
}

function copy(array) {
  return array.map(m => [...m]);
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let myBigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

maze(myBigMaze);

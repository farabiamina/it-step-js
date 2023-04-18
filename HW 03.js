// Task 1
let size = 8;
let chessboard = '';

for (let row = 0; row < size; row++) {
  for (let column = 0; column < size; column++) {
    if ((row + column) % 2 === 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n';
}

console.log(chessboard);
console.log(chessboard);



// Task 2
function arrayToObject(arr) {
    const result = {};
    for (const [key, value] of arr) {
      result[key] = value;
    }
    return result;
  }
const result = arrayToObject([['a', 1], ['b', 2]]);
console.log(result);

  
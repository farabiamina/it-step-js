let area = document.getElementById("area");
let currentPlayer = document.getElementById("current-player");

let player = "X";

for (let i = 1; i <= 9; i++) {
  area.innerHTML += '<div class="cell" pos=' + i + "></div>";
}

let cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClick);
}

let sO = document.getElementById('s-o');
let sX = document.getElementById('s-x');
let sD = document.getElementById('s-d');

let stat = {
    x: 0,
    o: 0,
    d: 0,
}
updateStat();

let winArray = [
  [1, 2, 3], //[1, 3, 5, 7]
  [4, 5, 6],
  [7, 8, 9],
  [3, 5, 7],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function cellClick() {
  data = [];
  if (!this.innerHTML) {
    this.innerHTML = player;
  } else {
    alert("Ячейка занята");
    return;
  }

  for (let cell of cells) {
    if (cell.innerHTML === player) {
      data.push(Number(cell.getAttribute("pos")));
    //   console.log(data);
    }
  }

  if (checkWin(data)) {
    (player === "X") ? stat.x++ : stat.o++;
    restart("Победа " + player);
    return;
  } else {
    let draw = true;
    for (let cell of cells) {
      if (cell.innerHTML === "") {
        draw = false;
      }
    }
    if (draw) {
      stat.d++;  
      restart("Ничья");
      return;
    }
  }

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = player;
}

function checkWin(data) {
  for (let i in winArray) {
    let win = true;
    for (let j in winArray[i]) {
      let isInData = data.indexOf(winArray[i][j]);

      if (isInData === -1) {
        win = false;
      }
    }
    if (win) {
      return true;
    }
  }
  return false;
}

function restart(message) {
    alert(message);
    player = "X";
    for (let cell of cells) {
        cell.innerHTML = "";
    }
    updateStat();
}

function updateStat() {
    sO.innerHTML = stat.o;
    sX.innerHTML = stat.x;
    sD.innerHTML = stat.d;
}


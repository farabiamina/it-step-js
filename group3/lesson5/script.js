let area = document.getElementById('area');
let curPl = document.getElementById('cur-pl');

let sX = document.getElementById('s-x');
let sO = document.getElementById('s-o');
let sD = document.getElementById('s-d');

let stat = {
    x: 0,
    o: 0,
    d: 0,
}

for (let i = 1; i <= 9; i++) {
    area.innerHTML += '<div class="cell" pos=' + i + '></div>';
}

let cells = document.getElementsByClassName('cell');

for (let cell of cells) {
    cell.addEventListener('click', cellClick);
}

let player = 'X';

function cellClick() {

    let playerPositions = [];

    if (!this.innerHTML) {
        this.innerHTML = player;
    }
    else {
        alert('Ячейка занята');
        return;
    }

    for (let cell of cells) {
        if (cell.innerHTML === player) {
            playerPositions.push(Number(cell.getAttribute('pos')));
        }
    }
    console.log(playerPositions);

    if (checkWin(playerPositions)) {
        // if (player === "X") {
        //     stat.x++;
        // }
        // else stat.o++;
        (player === "X") ? stat.x++ : stat.o++;
        restart('Победил' + player);    
        return;
    }
    else {
        let draw = true;
        for (let cell of cells) {
            if (cell.innerHTML === "") {
                draw = false;
            }
        }
        if (draw) {
            stat.d++;
            restart('Ничья');
            return;
        }
    }

    player = (player == "X") ? "O" : "X";
    curPl.innerHTML = player;
}


let winCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
] 

function checkWin(arr) {
    // for (let i in winCombinations) {
    //     let win = true;
    //     for (let j in winCombinations[i]) {
    //         let isInWinCombination = playerPositions.indexOf(playerPositions[i][j]);
    //     }
    // }
    for (let combination of winCombinations) {
        let win = true;
        for (let i of combination) {
            let isInWinCombination = arr.indexOf(i);

            if (isInWinCombination === -1) {
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
    console.log(stat);
    updateStat();
}

function updateStat() {
    sX.innerHTML = stat.x;
    sO.innerHTML = stat.o;
    sD.innerHTML = stat.d;
}
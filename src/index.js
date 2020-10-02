import "./styles.css";

let currentTurn = "O";
let gameActive = true;
var turn = document.getElementById("insidebar");
var turnCounter = 0;
var width = 0;
var id;
var seconds = 0;
var time = document.getElementById("stopwatch");
var timeInterval;
var timeout;

function timeOut() {
  turnCounter++;
  alert("Time has run out, other players turn.");
  changePlayer();
}

function resetTimeout() {
  clearTimeout(timeout);
}
function rewindTimer() {
  time.innerHTML = 10 - seconds;
  seconds++;
}
if ((turnCounter = 0)) {
  timeInterval = setInterval(rewindTimer, 1000);
}

function movebar() {
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      resetWidth();
    } else {
      width++;
      turn.style.width = width + "%";
      turn.innerHTML = Math.round(width * 0.1) + " Sec";
    }
  }
}

function move() {
  if (width >= 25) {
    resetWidth();
  } else {
    width = width + 1;
    turn.style.width = width + "%";
    turn.innerHTML = width + ".Turn";
  }
}

function resetWidth() {
  width = 0;
  clearInterval(id);
  turn.style.width = width + "%";
}

function createTable() {
  const table = document.getElementById("board");
  for (let i = 0; i < 5; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 5; j++) {
      row.insertCell();
    }
  }
  cellClick(table);
}

createTable();

function changePlayer() {
  currentTurn = currentTurn === "X" ? "O" : "X";
  clearInterval(timeInterval);
  timeInterval = setInterval(rewindTimer, 1000);
  timeout = setTimeout(timeOut, 10000);
  seconds = 0;
  turnCounter++;
  rewindTimer();
}

function insertValue(tableCell, table) {
  if (tableCell.innerHTML === "" && currentTurn === "O") {
    tableCell.innerHTML = "X";
    tableCell.style.backgroundColor = "rgb(124, 252, 0)";
    resetTimeout();
    changePlayer();
  }
  if (tableCell.innerHTML === "") {
    tableCell.innerHTML = "O";
    tableCell.style.backgroundColor = "rgb(250, 128, 114)";
    resetTimeout();
    changePlayer();
  }
  if (turnCounter === 25) {
    resetTable();
  }
  checkWinner();
}

function cellClick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function () {
        insertValue(this, table);
        resetWidth();
        movebar();
      };
    }
  }
}

const winCombinations = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

function checkWinner() {
  let roundWin = false;
  let table = document.getElementById("board");
  for (let i = 0; i <= 4; i++) {
    let a = table.rows[i].cells[0].innerHTML;
    let b = table.rows[i].cells[1].innerHTML;
    let c = table.rows[i].cells[2].innerHTML;
    let d = table.rows[i].cells[3].innerHTML;
    let e = table.rows[i].cells[4].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;
      break;
    }
  }
  for (let i = 0; i <= 4; i++) {
    let a = table.rows[0].cells[i].innerHTML;
    let b = table.rows[1].cells[i].innerHTML;
    let c = table.rows[2].cells[i].innerHTML;
    let d = table.rows[3].cells[i].innerHTML;
    let e = table.rows[4].cells[i].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;
      break;
    }
  }
  for (let i = 0; i <= 4; i++) {
    let a = table.rows[0].cells[0].innerHTML;
    let b = table.rows[1].cells[1].innerHTML;
    let c = table.rows[2].cells[2].innerHTML;
    let d = table.rows[3].cells[3].innerHTML;
    let e = table.rows[4].cells[4].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;
      break;
    }
  }
  for (let i = 0; i <= 4; i++) {
    let a = table.rows[0].cells[4].innerHTML;
    let b = table.rows[1].cells[3].innerHTML;
    let c = table.rows[2].cells[2].innerHTML;
    let d = table.rows[3].cells[1].innerHTML;
    let e = table.rows[4].cells[0].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;
      break;
    }
  }
  if (roundWin) {
    if (currentTurn === "X") {
      alert("Player 1 won!");
    }
    if (currentTurn === "O") {
      alert("Player 2 won!");
    }
    gameActive = false;
    resetTimeout();
    resetTable();
    resetWidth();
    turnCounter = 0;
    return;
  }
}

function resetTable() {
  document.getElementById("board").innerHTML = "";
  turnCounter = 0;
  createTable();
}

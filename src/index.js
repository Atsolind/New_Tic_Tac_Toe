import "./styles.css";
let currentTurn = "O";
var time = document.getElementById("insidebar");
let width = 0;
let id;

function movebar() {
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      changePlayer();
      resetWidth();
      alert("Too slow, changin player.");
    } else {
      width++;
      time.style.width = width + "%";
      time.innerHTML = Math.round(width * 0.1) + " Sec";
    }
  }
}

function resetWidth() {
  width = 0;
  clearInterval(id);
  time.style.width = width + "%";
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
}
function insertValue(tableCell, table) {
  if (tableCell.innerHTML === "" && currentTurn === "O") {
    tableCell.innerHTML = "X";
    tableCell.style.backgroundColor = "rgb(124, 252, 0)";
    changePlayer();
  }
  if (tableCell.innerHTML === "") {
    tableCell.innerHTML = "O";
    tableCell.style.backgroundColor = "rgb(250, 128, 114)";
    changePlayer();
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
    resetTable();
    return;
  }
}
function resetTable() {
  document.getElementById("board").innerHTML = "";
  createTable();
}

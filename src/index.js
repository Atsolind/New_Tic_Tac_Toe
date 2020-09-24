import "./styles.css";

let currentTurn = "O";

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
    changePlayer();
  }
  if (tableCell.innerHTML === "") {
    tableCell.innerHTML = "O";
    changePlayer();
  }
}

function cellClick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function () {
        insertValue(this, table);
      };
    }
  }
}

function tableInserts(tableCell, table) {}

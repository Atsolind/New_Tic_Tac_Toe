import "./styles.css";

let currentTurn = "X";

function createTable() {
  const table = document.getElementById("board");
  for (let i = 0; i < 5; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 5; j++) {
      row.insertCell();
    }
  }
}

createTable();

function changePlayer() {
  currentTurn = currentTurn === "X" ? "O" : "X";
}

function insertValue(tableCell, table) {
  if (tableCell.innerHTML === "") {
    tableCell.innerHTML = "X";
    changePlayer();
  }
  if (tableCell.innerHTML === "") {
    tableCell.innerHTML = "O";
    changePlayer();
  }
}

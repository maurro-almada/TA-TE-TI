const board = document.getElementById("game-board");
const reset = document.getElementById("reset");
let turn = "X";
let winner = null;
let moves = 0;
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
function handleClick(event) {
	const cell = event.target;
	if (cell.textContent !== "" || winner !== null) {
		return;
	}
	cell.textContent = turn;
	moves++;
	checkWin();
	turn = turn === "X" ? "O" : "X";
	document.getElementById("game-board").setAttribute("data-turn", turn);
}
function checkWin() {
	for (let condition of winConditions) {
		const [a, b, c] = condition;
		if (board.rows[Math.floor(a / 3)].cells[a % 3].textContent === turn &&
			board.rows[Math.floor(b / 3)].cells[b % 3].textContent === turn &&
			board.rows[Math.floor(c / 3)].cells[c % 3].textContent === turn) {
			winner = turn;
			let mySpan = document.getElementById("turn");
			mySpan.textContent = null;
			let myDiv = document.getElementById("winner");
			myDiv.textContent = `EL GANADOR ES ${winner}`;
			document.getElementById("game-board").setAttribute("data-winner", winner);


			board.rows[Math.floor(a / 3)].cells[a % 3].classList.add('win');
      		board.rows[Math.floor(b / 3)].cells[b % 3].classList.add('win');
      		board.rows[Math.floor(c / 3)].cells[c % 3].classList.add('win');



      return;



			return;
		}
	}
	if (moves === 9) {
		winner = "tie";
		let myEmpate = document.getElementById("winner");
		myEmpate.textContent = `HAN EMPATADO`;
		document.getElementById("game-board").setAttribute("data-winner", winner);
	}
}

function resetGame() {
	for (let row of board.rows) {
		for (let cell of row.cells) {
			cell.textContent = "";
			cell.classList.remove('win');
		}
	}
	turn = "X";
	winner = null;
	moves = 0;
	document.getElementById("game-board").setAttribute("data-turn", turn);
	document.getElementById("game-board").removeAttribute("data-winner");
	let myDiv = document.getElementById("winner");
			myDiv.textContent = null;


}
board.addEventListener("click", handleClick);
reset.addEventListener("click", resetGame);
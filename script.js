const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer.toLowerCase());
            checkWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

resetBtn.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'win');
    });
    currentPlayer = 'X';
    gameOver = false;
});

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        ) {
            gameOver = true;
            alert(`Player ${currentPlayer} wins!`);
            highlightWinningCells([cells[a], cells[b], cells[c]]);
        }
    }
}

function highlightWinningCells(winningCells) {
    winningCells.forEach((cell) => {
        cell.classList.add('win');
    });
}
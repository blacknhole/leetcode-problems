/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let copyBoard = JSON.parse(JSON.stringify(board)),
    rowLen = board.length,
    colLen = board[0].length;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      let sum = 0;
      if (i !== 0) {
        if (j !== 0) sum += copyBoard[i - 1][j - 1];
        if (j !== colLen - 1) sum += copyBoard[i - 1][j + 1];
        sum += copyBoard[i - 1][j];
      }
      if (i !== rowLen - 1) {
        if (j !== 0) sum += copyBoard[i + 1][j - 1];
        if (j !== colLen - 1) sum += copyBoard[i + 1][j + 1];
        sum += copyBoard[i + 1][j];
      }
      if (j !== 0) sum += copyBoard[i][j - 1];
      if (j !== colLen - 1) sum += copyBoard[i][j + 1];

      let current = copyBoard[i][j];
      if (current === 0 && sum === 3) {
        board[i][j] = 1;
      }
      if (current === 1 && (sum < 2 || sum > 3)) {
        board[i][j] = 0;
      }
    }
  }
};
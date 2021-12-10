const validSudoku = (board) => {
    let row = new Set();
    let col = new Set();
    let rowItem, colItem, boxItem;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            rowItem = board[i][j];
            colItem = board[j][i];
            boxItem = board[Math.floor(i/3)][Math.floor(j%3)];
            if(rowItem !== '.') {
                if(row.has(rowItem)) return false;
                row.add(rowItem);
            }
            if(colItem !== '.') {
                if(col.has(colItem)) return false;
                col.add(colItem);
            }
        }
        row.clear();
        col.clear();
    }
    return true;
}

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const result = validSudoku(board);
console.log(result);
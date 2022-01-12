var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle;
};


SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    const rectangle = this.rectangle;
    let i = row1;
    let j = col1;
    while(i <= row2) {
        if(i === row2 && j > col2) return;
        if(j <= col2) {
            rectangle[i][j] = newValue;
            j++;
        } else {
            j = col1;
            i++;
        }
    }
};

SubrectangleQueries.prototype.getValue = function(row, col) {
    console.log(this.rectangle[row][col]);
    return this.rectangle[row][col];
};

let obj = new SubrectangleQueries([[3,9,4],[5,6,10]]);
obj.getValue(0, 0); // return 1
obj.updateSubrectangle(0, 0, 2, 2, 100);
obj.getValue(0, 0); // return 100
obj.getValue(2, 2); // return 100
obj.updateSubrectangle(1, 1, 2, 2, 20);
obj.getValue(2, 2); // return 20
 

//  SubrectangleQueries subrectangleQueries = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]]);  
 // The initial rectangle (4x3) looks like:
 // 1 2 1
 // 4 3 4
 // 3 2 1
 // 1 1 1

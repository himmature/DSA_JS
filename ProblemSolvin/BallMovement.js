var minOperations = function(boxes) {
    const result = [];
    for(let i = 0; i < boxes.length; i++) {
        let ops = 0;
        for(let j = 0; j < boxes.length; j++) {
            if(i !== j) {
                if(+boxes[j]) {
                    ops += Math.abs(i - j);
                }
            }
        }
        console.log(ops);
        result.push(ops);
    }
    return result;
};

const boxes = "001011"
// const result = [11,8,5,4,3,4]

const result = minOperations(boxes);
console.log(result);
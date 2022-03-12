var executeInstructions = function(n, startPos, s) {
    const result = [];
    function exec(index, moves, newPosition) {
        if(index === s.length) {
            result.push(moves);
            return;
        };
        if(s[index] === "R") {
            newPosition[1] += 1;
        } else if(s[index] === "L") {
            newPosition[1] -= 1;
        } else if(s[index] === "U") {
            newPosition[0] -= 1;
        } else if(s[index] === "D") {
            newPosition[0] += 1;
        }
        if(newPosition[0] < 0 || newPosition[1] < 0 || newPosition[0] === n || newPosition[1] === n) {
            result.push(moves);
            return;
        };
        exec(++index, ++moves, newPosition);
    }
    for(let i = 0; i < s.length; i++) {
        exec(i, moves = 0, newPosition=[...startPos]);
    }
    return result;
};

const n = 1, startPos = [0,0], s = "LRUD"
const result = executeInstructions(n, startPos, s);
console.log(result);
var numTilePossibilities = function(tiles) {
    const result = new Set();
    function backtrack(str, temp) {
        for(let i = 0; i < str.length; i++) {
            if(!str) return;
            temp.push(str[i]);
            result.add(temp.join(''));
            backtrack(str.replace(str[i], ''), temp);
            temp.pop();
        }
    }
    backtrack(tiles, [])
    console.log(result);
    return result.size;
};

const tiles = 'AAB';
const result = numTilePossibilities(tiles);
console.log(result);
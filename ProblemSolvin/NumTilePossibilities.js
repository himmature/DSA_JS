var numTilePossibilities = function(tiles) {
    const result = new Set();
    function exec(tiles, str=[]) {
        if(!tiles.length) return;
        tiles.forEach((item, index) => {
            str.push(item);
            result.add(str.join(''));
            exec(tiles.slice(index + 1), str);
        })
    }
    exec(tiles.split(''));
};

const tiles = 'AAB';
const result = numTilePossibilities(tiles);
console.log(result);
var countPoints = function(points, queries) {
    const result = [];
    queries.forEach(query => {
        let count = 0;
        let centerX = query[0];
        let centerY = query[1];
        let radius = query[2];
        points.forEach(point => {
            let x = point[0];
            let y = point[1];
            let isXInside = (x <= centerX && x >= Math.abs(centerX - radius)) || (x >= centerX && x <= Math.abs(centerX + radius));
            let isYInside = (y <= centerY && y >= Math.abs(centerY - radius)) || (y >= centerY && y <= Math.abs(centerY + radius));
            let Xlimit = centerX + radius;
            let Ylimit = centerY + radius;

            if(x === Xlimit && y === Ylimit) {
                isXInside = false;
                isYInside = false;
            }
            console.log(isXInside, isYInside);
            if(isXInside && isYInside) {
                count += 1;
            }
        })
        result.push(count);
        console.log('==========');
    })
    return result;
};

const points = [[1,1],[2,2],[3,3],[4,4],[5,5]];
const queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]];

const result = countPoints(points, queries);
console.log(result);
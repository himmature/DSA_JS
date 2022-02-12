var maxCoins = function(piles) {
    let sum = 0;
    piles.sort((a, b) => a - b);
    const tuples = (piles.length)/3;
    for (let i = piles.length - 2; i >= tuples; i -= 2) {
        sum += piles[i];
    }
    return sum;
};

const piles = [2,4,5];
const result = maxCoins(piles);
console.log(result);

////[1,2,3,4,5,6,7,8,9]

//[9,8,7,6,5,1,2,3,4]
//[9,8,1] [7,6,2], [5,4,3]
var kidsWithCandies = function(candies, extraCandies) {
    return candies.reduce((acc, cv) => {
        let newCandy = cv + extraCandies;
        const isMaxAvailable = candies.find(item => item > newCandy);
        acc.push(!isMaxAvailable);
        return acc;
    }, [])
};

const candies = [4,2,1,1,2];
const extraCandies = 1;
const result = kidsWithCandies(candies, extraCandies);
console.log(result);
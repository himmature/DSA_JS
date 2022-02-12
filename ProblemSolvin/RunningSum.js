var runningSum = function(nums) {
    let prevSum = 0;
    const result = nums.reduce((acc, cv) => {
        prevSum += cv;
        acc.push(prevSum);
        return acc;
    }, [])
    return result;
};

const arr = [2,3,4,5];
const result = runningSum(arr);
console.log(result);
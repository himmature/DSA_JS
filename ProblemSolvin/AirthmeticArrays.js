var checkArithmeticSubarrays = function(nums, l, r) {
    const result = [];
    for(let i = 0; i < l.length; i++) {
        const newNums = nums.slice(l[i], r[i] + 1);
        if(newNums.length < 2) {
            result.push(false, newNums);
        } else {
            let isValidArray = true;
            newNums.sort((a, b) => a - b);
            const diff = newNums[1] - newNums[0];
            for(let j = 2; j < newNums.length; j++) {
                const tempDiff = newNums[j] - newNums[j - 1];
                if(tempDiff !== diff) {
                    result.push(false);
                    isValidArray = false;
                    break;
                }
            }
            if(isValidArray) {
                result.push(true);
            }
        }
    }
    return result;
};
const nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5];
const result = checkArithmeticSubarrays(nums, l, r);
console.log(result);
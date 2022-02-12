var rearrangeArray = function(nums) {
    let result = [];
    let positive = nums.filter(item => item >= 0);
    let negative = nums.filter(item => item < 0);
    for(let i = 0; i < positive.length; i++) {
        result.push(positive[i]);
        result.push(negative[i]);
    }
    return result;
};

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

const nums = [-1,1];
const result = rearrangeArray(nums);
console.log(result);
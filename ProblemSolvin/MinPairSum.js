var minPairSum = function(nums) {
    nums.sort(function(a, b) { return a-b});
    console.log(nums)
    let i = 0;
    let j = nums.length - 1;
    let max = 0;
    while (i < j) {
        max = Math.max(max, nums[i] + nums[j]);
        i++;
        j--;
    }
    return max;
};

const nums = [3,5,2,3];
const result = minPairSum(nums);
console.log(result);
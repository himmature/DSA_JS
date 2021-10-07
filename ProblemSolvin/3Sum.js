 var threeSum = function(nums) {
    if(nums.length < 3) return [];
    nums = nums.sort((a, b) => {
        return a - b;
    })
    let map = new Map();
    let sum = 0;
    nums.forEach((item, index) => {
        let left = index + 1;
        let right = nums.length - 1;
        while(left < right) {
            sum = item + nums[left] + nums[right];
            if(!sum) {
                map.set([item, nums[left], nums[right]].toString(), [item, nums[left], nums[right]]);
                left++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    })
    return [...map.values()];
};

const result = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);
console.log(result);
// const result = threeSum([-3,1,0,3,-1]);
const searchRange = (nums, target) => {
    let startIndex = nums.indexOf(target);
    let end = nums.reverse().indexOf(target);
    let endIndex = -1;
    if(end !== -1) {
        endIndex = nums.length - 1 - end;
    }
    return [startIndex, endIndex];
}
const nums = [];
const target = 0;
const result = searchRange(nums, target);
console.log(result);
var pivotArray = function(nums, pivot) {
    let i = 0;
    let indexToInsert = 0;
    while (i < nums.length) {
        if(nums[i] <= pivot) {
            nums.splice(indexToInsert, 0, nums[i]);
            nums.splice(i + 1, 1);
            nums[indexToInsert] !== pivot && indexToInsert++;
        }
        i++;
    }
    return nums;
};

var pivotArraySecond = function(nums, pivot) {
    let lessArr = [];
    let pivotArr = [];
    let greaterArr = [];
    for (let i = 0; i < nums.length; i++){
        if(nums[i] < pivot) lessArr.push(nums[i]);
        else if(nums[i] > pivot) greaterArr.push(nums[i]);
        else pivotArr.push(nums[i]);
    }
    return [...lessArr, ...pivotArr, ...greaterArr];
};



const nums = [9,12,5,10,14,3,10];
const pivot = 10;
console.time('pivotArraySecond');
const result = pivotArray(nums, pivot);
console.timeEnd('pivotArraySecond');
console.log(result);

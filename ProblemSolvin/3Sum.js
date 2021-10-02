 var threeSum = function(nums) {
    if(nums.length < 3) return [];
    let i = 0;
    let j = 1;
    let k = 2;
    let sum;
    let results = [];
    while(i < nums.length - 2) {
        sum = nums[i] + nums[j] + nums[k];
        if(!sum) {
            if(results.length === 0) {
                results.push([nums[i], nums[j], nums[k]]);
            } else {
                let isDuplicate;
                for(let x = 0; x < results.length; x++) {
                    isDuplicate = results[x].includes(nums[i]) && results[x].includes(nums[j]) && results[x].includes(nums[k]);
                    if(isDuplicate) {
                        break;
                    }
                }
                !isDuplicate && results.push([nums[i], nums[j], nums[k]]);
            }            
        }
        if(k < nums.length - 1) {
            k++;
        } else if(k === nums.length - 1 && j < nums.length - 2) {
            j++;
            k = j + 1;
        } else if(j === nums.length - 2) {
            i++;
            j = i + 1;
            k = j + 1;
        }
    }
    return results;
};

// const result = threeSum([-4,-2,1,-5,-4,-4,-2,0,4,0,-2,3,1,-5,0]);
const result = threeSum([-3,1,0,3,-1]);
[
    [-3,0,3],
    [1,0,-1]
]
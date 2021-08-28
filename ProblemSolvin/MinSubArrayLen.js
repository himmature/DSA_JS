const minSubArrayLen = (arr, target) => {
    let minlength = Infinity;
    let start = 0;
    let tempSum = 0;
    let next = start;
    let count = 0;
    while(start < arr.length) {
        tempSum += arr[next];
        count++;
        if(next < arr.length) {
            next++;
        } else {
            start++;
        }
        if(tempSum >= target) {
            if(minlength > count) {
                minlength = count;
                
            }
            start++;
            next = start;
            count = 0;
            tempSum = 0;
        }
    }
    return minlength != Infinity ? minlength : 0;
}

const result = minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)
console.log(result);
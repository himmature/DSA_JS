const averagePair = (arr, target) => {
    if(arr.length === 0) {
        return false;
    }
    let start = 0;
    let end = arr.length - 1;
    while(start < target) {
        let avg = (arr[start] + arr[end])/2;
        if(avg > target){
            end--;
        } else if (avg < target) {
            start++;
        } else {
            return true;
        }
    }
    return false;
}

const result = averagePair([1,2,3], 2.5)
console.log(result);
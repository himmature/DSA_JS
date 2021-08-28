const binarySearchBasic = (arr, value) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let pivot = Math.ceil((left+right)/2);
        if (arr[pivot] === value) {
            return pivot;
        } else if (arr[pivot] < value) {
            left = pivot;
        } else if(arr[pivot] > value) {
            right = pivot;
        }
    }
    return -1;
}

const result = binarySearchBasic([2,4,7,8,22,26,34,50,57,69], 22);
console.log(result);
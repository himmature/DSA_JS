const binarySearchBasic = (arr, value) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let pivot = Math.ceil((left + right) / 2);
        if (arr[pivot] === value) {
            return pivot;
        } else if (arr[pivot] < value) {
            left = pivot;
        } else if (arr[pivot] > value) {
            right = pivot;
        }
    }
    return -1;
}

const binarySearchRecursion = (arr, value, left = 0, right = arr.length - 1) => {
    let pivot = Math.ceil((left + right) / 2);
    if (arr[pivot] === value) return pivot;
    else if (arr[pivot] < value) return binarySearchBasic(arr, value, pivot + 1, right);
    else return binarySearchBasic(arr, value, left, pivot - 1)
}

const result = binarySearchRecursion([2, 4, 7, 8, 22, 26, 34, 50, 57, 69], 4);
console.log(result);
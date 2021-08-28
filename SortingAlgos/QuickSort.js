function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = start;
    let finalpivotIndex = start;
    while (start <= end) {
        if (arr[start] < arr[pivot]) {
            finalpivotIndex++;
            [arr[finalpivotIndex], arr[start]] = [arr[start], arr[finalpivotIndex]];
        }
        start++;
    }
    [arr[finalpivotIndex], arr[pivot]] = [arr[pivot], arr[finalpivotIndex]];
    return finalpivotIndex;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let finalpivotIndex = pivot(arr, left, right);
        quickSort(arr, left, finalpivotIndex - 1);
        quickSort(arr, finalpivotIndex + 1, right);
    }
    return arr;
}

const result = quickSort([5, 2, 200, 7, 1, 4, 9, 0]);
console.log(result);
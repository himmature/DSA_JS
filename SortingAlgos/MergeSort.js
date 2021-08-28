//takes two sorted arrays and combine them into a single sorted array
//this is required for mergesort function
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
    }
    if (i < arr1.length) {
        result = result.concat(arr1.slice(i));
    } else if (j < arr2.length) {
        result = result.concat(arr2.slice(j));
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const output = mergeSort([4, 1, 11, 8]);
console.log(output);
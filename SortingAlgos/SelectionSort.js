const selectionSort = (arr) => {
    let min;
    for(let i = 0; i< arr.length; i++) {
        min = i;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        if(arr[i] != arr[min]){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
let arr = [5,4,9,7,6,2];

const result = selectionSort(arr);
console.log('Selection sort', result);
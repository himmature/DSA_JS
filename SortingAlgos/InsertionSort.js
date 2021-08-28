const insertionSort = (arr) => {
    let valueToInsert;
    for(let i = 0; i<arr.length; i++) {
        valueToInsert = arr[i];
        let j = i+1;
        while(j>=0 && valueToInsert > arr[j]) {
                valueToInsert = arr[j];
                arr[j] = arr[i];
            j--;
        }
        arr[j + 1] = valueToInsert;
        console.log('arr', arr);
    }
    return arr;
}


let arr = [5,3,7,2,1,6];
const result = insertionSort(arr);
console.log(result);
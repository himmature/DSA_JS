const bubbleSort = (arr) => {
    let isSwapped;
    for(let i = arr.length-1; i>0; i--) {
        isSwapped = false;
        for(let j = 0; j<i-1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                isSwapped = true;
                // swapping using third variable
                //    let temp = arr[j];
                //    arr[j] = arr[i];
                //    arr[i] = temp
    
                //swapping without using third variable
                // arr[i] = arr[i] + arr[j];
                // arr[j] = arr[i] - arr[j];
                // arr[i] = arr[i] - arr[j];
                
                // ES6 way of swapping
            }
        }
        console.log('Iteration Complete!');
        //if(!isSwapped) break
    }
    return arr;
}

const sinkingSort = (arr) => {
    for(let i = 0; i<arr.length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}


let arr = [5,4,9,1,6,2];

const result = bubbleSort(arr);
const result1 = sinkingSort(arr);
console.log('bubble sort', result);
console.log('sinking sort', result);
const productOfArray = (arr) => {
    if(arr.length === 0) return;
    if(arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1))
}

const result = productOfArray([1,2,3,4,10]);
console.log(result);
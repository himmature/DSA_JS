const linerSearchBasic = (arr, value) => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
}
const result = linerSearchBasic([1,2,6,7,9,99],6);
console.log(result);
const secondLowestString = (arr) => {
    for(let i = 1; i <= 2; i++) {
        for(let j = arr.length - i; j > 0; j--) {
            if(arr[j].length < arr[j - 1].length){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }
    return arr[1];
}

const arr = ['peter', 'jack', 'undefined', 'null', 'string'];
const result = secondLowestString(arr);
console.log(result);
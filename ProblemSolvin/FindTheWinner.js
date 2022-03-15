var findTheWinner = function(n, k) {
    const nums = [];
    function exec(index, arr) {
        if(arr.length === 1) return arr[0];
        let indexRemoved = index + k - 1;
        if(indexRemoved >= arr.length) {
            indexRemoved = indexRemoved % (arr.length);
        }
        arr.splice(indexRemoved, 1);
        return exec(indexRemoved, arr);
    }
    for(let i = 1; i <= n; i++) {
        nums.push(i);
    }
    return exec(0, nums);
};

const n = 6, k = 5;
const result = findTheWinner(n, k);
console.log(result);
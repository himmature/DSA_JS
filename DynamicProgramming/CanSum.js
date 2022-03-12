function canSum(target, arr) {
    let isSummed = false;
    function bruteForce(target, arr) {
        for (let i = 0; i < arr.length; i++) {
            if(target - arr[i] === 0) {
                isSummed = true;
                return;
            };
            if(target - arr[i] > 0) return canSum(target - arr[i], arr);
            if(target - arr[i] < 0) return false;
        }
    }
    bruteForce(target, arr);
    return isSummed;
}

const target = 7;
const arr = [5,3,4,7];
const result = canSum(target, arr);
console.log(result);
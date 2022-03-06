var combine = function(n, k) {
    const result = [];
    const temp = [];
    function backtrack(index) {
        if(temp.length === k) {
            result.push([...temp]);
            return;
        }
        for (let i = index; i <= n; i++) {
            temp.push(i);
            backtrack(i + 1);
            temp.pop();
        }
    }
    backtrack(1);
    return result;
};

const n = 6, k = 3;
const result = combine(n, k);
console.log(result);
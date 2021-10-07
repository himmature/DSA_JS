const removeDuplicates = (arr) => {
    let res = {};
    arr.forEach((item) => {
        if(Array.isArray(item)) {
            item = item.sort((a,b) => a-b);
        }
        if(item) {
            res[item + ''] = item;
        } else {

        }
    })
    return [...Object.values(res)];
}

const result = removeDuplicates([
    'hello',
    2,
    3,
    2,
    [1,1,2],
    [2,1,1],
    [3,4,5],
    [5,4,3],
    []
]);
console.log(result);

//output:
// [ 2, 3, 'hello', [ 1, 1, 2 ], [ 3, 4, 5 ], [] ]
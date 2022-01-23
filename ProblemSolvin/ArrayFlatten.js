const flattenArray = (arr) => {
    const result = [];
    const exec = (item) => {
        if(Array.isArray(item)) {
            item.forEach(exec);
        } else {
            result.push(item);
        }
    }
    arr.forEach(exec);
    return result;
}


const arr = ['hello', 'world', [2, 3], [true, [5 ,[6]]]]
const result = flattenArray(arr);
console.log(result);
const capitalizeFirst = (arr) => {
    if(arr.length === 0) {
        return [];
    }
    let result = [];
    let str = arr[0];
    let newStr = str[0].toUpperCase() + str.slice(1);
    result.push(newStr);
    return result.concat(CapitalizeFirst(arr.slice(1)));
}
const result = capitalizeFirst(['car', 'taco', 'bananan']);
console.log(result);

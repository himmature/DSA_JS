Array.prototype.myMap = function (func) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        let res = func(this[i], i);
        result.push(res);
    }
    return result;
}

let arr = [2,4,6];

let newArr = arr.myMap((item, index) => {
    return item*index;
})
console.log('oldArr', arr)
console.log('newArr', newArr);
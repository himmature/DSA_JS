function findObj(obj, str) {
    let keysArr = str.split('.');
    let temp = obj;
    keysArr.forEach((key) => {
        if(!temp) return undefined;
        temp = temp[key];
    });
    return temp;
}

function findObjRecursion(obj, str) {
    let keysArr = str.split('.');
    let count = 0;
    const getObj = (val) => {
        if(val === null || val === undefined || typeof val !== 'object' || count === keysArr.length - 1) {
            return val;
        } else {
            count++;
            return getObj(val[keysArr[count]]);
        }
    }
    return getObj(obj[keysArr[count]]);
}

let obj = {
    a: {
        b: {
            c: 'tavica'
        },
        d: 1234,
        e: false,
        f: {
            i: null
        }
    },
    j: 'heee'
}

const result = findObjRecursion(obj, 'a.f.i');
console.log(result);
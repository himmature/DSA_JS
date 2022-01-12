const canBeRoatated = (src, target) => {
    let originalString = src;
    let count = 0;
    const rotateString = (src, target) => {
        count++;
        if(src.length !== target.length) return false;
        let newSrc = src.slice(1) + src[0];
        if(newSrc === target) return [true, count];
        if(newSrc === originalString) return false;
        return rotateString(newSrc, target);
    }
    return rotateString(src, target);
}

const canBeRoatatedIterative = (src, target) => {
    let count = 0;
    if(src.length !== target.length) return false;
    let newSrc = src;
    while (true) {
        count++;
        newSrc = newSrc.slice(1) + newSrc[0];
        if(newSrc === target) {
            return [true, count];
        };
        if(newSrc === src) return false;
    }
}

const result = canBeRoatatedIterative('hello', 'llohm');
console.log(result);
const canBeRoatated = (src, target) => {
    let originalString = src;
    const rotateString = (src, target) => {
        if(src.length !== target.length) return false;
        let newSrc = src.slice(1) + src[0];
        if(newSrc === target) return true;
        if(newSrc === originalString) return false;
        return rotateString(newSrc, target);
    }
    return rotateString(src, target);
}

const result = canBeRoatated('ababab', 'ababba');
console.log(result);
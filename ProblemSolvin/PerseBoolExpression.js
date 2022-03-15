var parseBoolExpr = function(expression) { 
    const getBoolean = s => s === 't' ? true : false;
    function exec(str) {
        if(!str.includes('(')) return str;
        const lastOpenPIndex = str.lastIndexOf('(');
        let tempStr = str.slice(lastOpenPIndex + 1);
        const closedPIndex = tempStr.indexOf(')');
        tempStr = tempStr.slice(0, closedPIndex);
        const tempArr = tempStr.split(',');
        const operator = str[lastOpenPIndex - 1];
        let res = '';
        if(operator === '!') {
            if(tempArr[0] === 't') res = 'f';
            else res = 't';
        } else if(operator === '|'){
            res = tempArr.reduce((acc, cv) => {
                if(cv.trim() === 't') {
                    return 't';
                } else {
                    if(getBoolean(acc) || false) return 't';
                    else return 'f';
                }
            }, 'f')
        } else if(operator === '&') {
            res = tempArr.reduce((acc, cv) => {
                if(cv.trim() === 't') {
                    if(getBoolean(acc) && true) return 't';
                    else return 'f';
                } else {
                    return 'f';
                }
            }, 't')
        }
        let strToReplace = operator + '(' + tempStr + ')';
        str = str.replaceAll(strToReplace, res);
        return exec(str);
    }
    return exec(expression) === 't' ? true : false;
};

const expression = "&(t,t,t)";
const result = parseBoolExpr(expression);
console.log(result);
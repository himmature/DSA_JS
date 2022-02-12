var camelMatch1 = function(queries, pattern) {
    return queries.map(query => {
        let i = 0;
        let isMatch = true;
        for(let q of query) {
            if(q === pattern[i]) {
                i++;
            } else if(q >= 'A' && q <= 'Z') {
                isMatch = false;
            }
        }
        return !isMatch ? isMatch : i === pattern.length;
    })
};

var camelMatch2 = function(queries, pattern) {
    // Complexity- O (L * K)
    // where L = max length of query, K = number of queries
    
    let res = [];
    for(let query of queries){
        let i = 0, isMatch = true;
        for(let char of query){
            // if there is a match
            if(i < pattern.length && char === pattern[i]) i++;
            // if mismatch & char is uppercase
            else if(char < 'a') isMatch = false;
        }
        res.push(isMatch === false ? false : i === pattern.length);
    }
    return res;
};

const queries = ["aFooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"];
const pattern = "FoBaT";

const result = camelMatch1(queries, pattern);
console.log(result);
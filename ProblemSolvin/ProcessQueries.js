var processQueries = function(queries, m) {
    let perm = [];
    for(let i = 1; i <= m; i++) {
        perm.push(i);
    }
    let result = [];
    for(let i = 0; i < queries.length; i++) {
        let index = perm.indexOf(queries[i]);
        result.push(index);
        perm = perm.splice(index, 1).concat(perm);
    }
    return result;
};

const queries = [7,5,5,8,3];
const m = 8;

const result = processQueries(queries, m);
console.log(result);
const findRoutes = routes => {
    let result = [];
    function findJourney(arr, source) {
        let matchFound = false
        for(let i = 0; i < arr.length; i++) {
            if(source[i] === arr[i][0]){
                matchFound = true
                result = result.concat(source);
                let newSrc = arr.splice(i, 1);
                findJourney(arr, newSrc);
            }
        }
        if(!matchFound) {
            result = [];
        }
        console.log(result);
    }
    findJourney(routes, routes[0]);
};

const result = findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]);
console.log(result);


[
    ["Chicago", "Winnipeg"]
]
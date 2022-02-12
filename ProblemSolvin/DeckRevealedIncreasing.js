var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    const result = [];
    const length = deck.length;
    let  i = 0;
    while(i < length) {
        result.unshift(deck.pop())
        result.unshift(result.pop())
        i++;
    }
    result.push(result.shift());
    return result;
};

const deck = [17,13,11,2,3,5,7]; //[2,13,3,11,5,17,7]
const result = deckRevealedIncreasing(deck);
console.log(result);

// [2,3,5,7,11,13,17]
// res.push(deck.pop())
// deck.push(deck.shift())


//[2,3,5,7,11,13,17]

//deck.unshift(deck.pop())
//res.push(deck.pop())

//[2,3,5,7,11,13,17]

//13, [17,2,3,5,7,11]

//13,7,3 [5,11,17,2,]



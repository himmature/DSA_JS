const fibonnaci = (n, dp={}) => {
    if(n < 2) return n;
    if(n in dp) return dp[n];
    dp[n] = fibonnaci(n - 1, dp) + fibonnaci(n - 2, dp);
    return dp[n];
}

const result = fibonnaci(7);
console.log(result);
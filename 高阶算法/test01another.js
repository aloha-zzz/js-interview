
let weight = [2, 2, 6, 5, 4]
let value = [6, 3, 5, 4, 6]

let maxWeight = 10;
let length = weight.length

let dp = [];

dp[0] = [];
for(let a = 0; a <= maxWeight; a++) {
    dp[0][a] = a >= weight[0] ? value[0] : 0
}


for(let i = 1; i < length; i++) {
    dp[i] = []
    for(let j = 0; j <= maxWeight; j++) {
        if(weight[i] > j) {
            dp[i][j] = dp[i - 1][j]
        } else {
            dp[i][j] = Math.max(dp[i - 1][j] , dp[i - 1][j - weight[i]] + value[i])
        }
    }
}
console.log(dp);
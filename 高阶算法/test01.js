    
// let weight = [4, 5, 6, 2, 2]
// let value = [6, 4, 5, 3, 6]
let weight = [1, 2, 3];
let value = [3, 7, 12];

let maxWeight = 5;


let length = weight.length;
let dp = []
dp[0] = []
for(let a = 0; a <= maxWeight; a ++) {
   
    dp[0][a] = a >= weight[0] ? value[0] : 0;
}

for(let i = 1; i < length; i++) {
    dp[i] = []
    for(let j = 0; j <= maxWeight; j++) {
        if(j >= weight[i]) {
            dp[i][j] = Math.max(dp[i - 1][j],  dp[i - 1][j - weight[i]] + value[i])
        } else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}
console.log(dp)
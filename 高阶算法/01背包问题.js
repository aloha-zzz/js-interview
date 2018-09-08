let n = 4
let puzzles = [
    [20,20,100,60],
    [50,30,80,55],
    [100,60,110,88],
    [5,3,10,6]
]
let dp = []
let maxTime = 120
for(let i=0;i<puzzles.length;i++){
    dp[i] = new Array(maxTime+1).fill(0)
    for(let j=0;j<=maxTime;j++){
     	if(j<puzzles[i][0]){
            if(i===0){
                dp[i][j] = 0
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }else if(j<puzzles[i][2]){
            if(i===0){
                dp[i][j] = puzzles[i][1]
            }else{
                dp[i][j] = Math.max(dp[i-1][j-puzzles[i][0]]+puzzles[i][1],dp[i-1][j])
            }
        }else{
            if(i===0){
                dp[i][j] = puzzles[i][3]
            }else{
                dp[i][j] = Math.max(dp[i-1][j-puzzles[i][2]]+puzzles[i][3],dp[i-1][j-puzzles[i][0]]+puzzles[i][1],dp[i-1][j])
            }
        }
    }        
}
// 94
console.log(dp[n-1][maxTime])
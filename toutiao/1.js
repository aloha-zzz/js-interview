let [m, n] = readline().split(',');
let arr = [];

for(let i = 0; i < m; i++) {
    arr.push(readline().split(','))
}

let tempNum = 0;
let maxPerson = 0;
let tempPerson = 0;
for(let a = 0; a < m; a ++) {
    for(let b = 0; b < n; b ++) {
        if(arr[a][b] == 1) {
            tempNum++;
            dfs(a, b)
            maxPerson = tempPerson > maxPerson ? tempPerson : maxPerson;
            tempPerson = 0;
        }
    }
}

function dfs(a, b) {
    if(a < 0 || a >= m || b < 0 || b >= n) {
        return;
    }
    if(arr[a][b] == 1){
        arr[a][b] = -1;
        tempPerson++;
        dfs(a - 1, b);
        dfs(a + 1, b);
        dfs(a, b + 1);
        dfs(a, b - 1);
        dfs(a + 1, b + 1);
        dfs(a - 1, b - 1);
        dfs(a + 1, b - 1);
        dfs(a - 1, b + 1)
    }
}

print(tempNum + ',' + maxPerson)
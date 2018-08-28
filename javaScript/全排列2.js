function permutate(str) {
    debugger
    let ans = []
    if (str.length <= 1) {
        return str;
    } else {
        let left = str[0];
        let right = str.slice(1);
        let preResult = permutate(right);
        for(let i = 0; i < preResult.length; i++) {
            for(let j = 0; j < preResult[i].length + 1; j++) {
                let temp = preResult[i].slice(0, j) + left + preResult[i].slice(j);
                ans.push(temp)
            }
        }
    }
    return ans
}

console.log(permutate('abc'))

function factorial(num) {
    let result = [1];

    for (var i = 2; i <= num; i++) {
        for (let j = 0, after = 0; j < result.length || after != 0; j++) {
            let ans = j < result.length ? i * result[j] + after : after
            result[j] = ans % 10;
            after = (ans - result[j]) / 10;
        }
    }

    return result.reverse().join('')
}

console.log(factorial(6))
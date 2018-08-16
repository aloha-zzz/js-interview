var repeatedSubstringPattern = function (s) {
    let len = s.length;
    for (let i = 1; i <= len / 2; i++) {
        if (len % i === 0) {
            let temp = len / i;
            let str = s.slice(0, i).repeat(temp) // 优化
            if (s === str) {
                return true
            }
        }
    }
    return false
};
var longestPalindrome = function (s) {
    let str = s.split('').join('#');
    let len = str.length;
    let maxStr = ''

    for (let i = 0; i < len; i++) {
        let temp = getAns(i);
        if (temp.length >= maxStr.length) {
            maxStr = temp
        }
    }
    return maxStr

    function getAns(index) {
        let left = index - 1;
        let right = index + 1;
        while (left >= 0 && right <= len) {
            if (str[left] === str[right]) {
                left--;
                right++
            } else {        
                break;
            }
        }
        left++;
        right--;
        let temp = str.slice(left, right + 1);
        return temp.replace(/#/g, function (match) {
            return ''
        })
    }
};


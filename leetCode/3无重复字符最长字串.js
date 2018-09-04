var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let temp = '';
    for (let i = 0; i < s.length; i++) {
     
        if (temp.indexOf(s[i]) > -1) {
            let index = temp.indexOf(s[i]);
            temp = temp.slice(index + 1)
            temp += s[i];
        } else {
            temp += s[i];
            maxLength = Math.max(maxLength, temp.length)
        }

    }
    return maxLength
};
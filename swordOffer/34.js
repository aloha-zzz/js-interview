
// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
// 并返回它的位置, 如果没有则返回 -1.

function FirstNotRepeatingChar(str)
{
    // write code here
    for(let i = 0, len = str.length; i < len; i++) {
        if(str.lastIndexOf(str[i]) === str.indexOf(str[i])){
            return i
        }
    }
    return -1
}
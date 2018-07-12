function comma(num) {
    let str = num.toString();
    let isPositive = true;
    if (str[0] === '-') {
        isPositive = false
        str = str.slice(1);
    }
    str.split('.');
    let arr = str.split('.');
    let preArr = arr[0].split('');
    let after = arr[1] || [];
    if (preArr.length <= 3) {

    } else {
        for (len = preArr.length, i = len - 3; i > 0; i = i - 3) { // 不能让首位是，
            preArr[i] = ',' + preArr[i];
        }
    }

    let ans = after.length !== 0 ? preArr.concat('.', after).join('') : preArr.join('');
    return isPositive ? ans : '-' + ans
}
//   ------------------------------
// 正则表达式


function commafy(num) {
    return num && num
        .toString()
        .replace(/-?(\d)(?=(\d{3})+\.)/g, function ($1) { // 先行断言
            return $1 + ',';
        });
}

console.log(commafy(1200000123123.223))
console.log(commafy(-12000001231231.223))
console.log(commafy(-31.223))



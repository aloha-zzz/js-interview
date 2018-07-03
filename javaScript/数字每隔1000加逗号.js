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


function Reg(str){
    let ans = str.replace(/(\d{1,3})(?=(\d{3})+$)/g, function ($1) {
        return $1 = $1 + ','
    })
    return ans
}
 

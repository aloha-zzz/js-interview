var plusOne = function(digits) {
    let Num = Number(digits.join(''));
    Num += 1;

    let tempArr = Num.toString().split('');
    return tempArr.map(item => Number(item))
};
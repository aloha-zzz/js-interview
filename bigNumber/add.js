const add = (a, b) => {
    let isAddOne = false;
    let num1 = a.toString().split('');
    let num2 = b.toString().split('');
    let ans = [];

    while (num1.length || num2.length) {
        let temp = (Number(num1.pop()) || 0) + (Number(num2.pop()) || 0) + (isAddOne ? 1 : 0);
        if (temp >= 10) {
            ans.unshift(temp - 10);
            isAddOne = true;
        } else {
            ans.unshift(temp)
        }
    }
    console.log(ans);

}

add(12512312, 999999);
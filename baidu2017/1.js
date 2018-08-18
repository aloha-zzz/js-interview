let num = readline();
let input = readline();
let inputArr = [];
let arr = [input];
while(arr.length > 0) {
    let head = arr.shift();
    let ans1 = head.replace('?', 1);
    let ans2 = head.replace('?', 0);
    if(ans1.indexOf('?') > -1) {
        arr.push(ans1, ans2)
    } else {
        inputArr.push(ans1, ans2);
    }
}
 
let sum = 0;
 
inputArr.forEach(item => {
    if(num.indexOf(item) > -1) {
        sum++;
    }
})
print(sum);

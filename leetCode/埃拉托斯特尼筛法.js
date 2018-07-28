function input(num){
    let ans = [];
    if(num <= 1) {
        return ans;
    }

    let arr = new Array(num + 1).fill('T');

    let len = arr.length;
    for(let i = 2; i < Math.sqrt(len); i++){
        if(arr[i] === 'T'){
            for(let j = i; j * i <= len; j++) {
                arr[j * i] = 'F';
            }
        }
    }
    for(let i = 2; i < len; i++){
        if(arr[i] === 'T'){
            ans.push(i)
        }
    }
    console.log(ans)
}
input(200)
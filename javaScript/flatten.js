var arr = [1, [2, [3, 4]]];

let ans = [];
function flatten(arr){
    arr.forEach(item => {
        item instanceof Array ? flatten(item) : ans.push(item)
    })
}
flatten(arr);
console.log(ans)
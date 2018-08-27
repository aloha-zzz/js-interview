let Len = 10
let groupNum = 0
let person = [ // 这个比 朋友圈男一点
    [0],
    [5, 3, 0],
    [8, 4, 0],
    [9, 0],
    [9, 0],
    [3, 0],
    [0],
    [7, 9, 0],
    [0],
    [9, 7, 0],
];

let boolArr = new Array(Len).fill('F')

let count = 0;
let flag = true;

for (let i = 0; i < Len; i++) {
    debugger
    if (boolArr[i] === 'T') {
        continue;
    }
    firstDFS(i)
    if (flag) {
        count++;
    }

    flag = true
}
function firstDFS(index) {
    let temp = person[index];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === 0) break;
        if (boolArr[temp[i] - 1] === 'T') {
            flag = false
            continue
        }
        DFS(temp[i] - 1)
    }
}

function DFS(index) {
    let temp = person[index];
    boolArr[index] = 'T'
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === 0) break;
        if (boolArr[temp[i] - 1] === 'T') {
            continue
        }
        DFS(temp[i] - 1)
    }
}

console.log(count)

var findCircleNum = function (M) {
    let len = M.length;
    let count = 0
    let boolArr = new Array(len).fill('F');

    for (let i = 0; i < len; i++) {
        if (boolArr[i] === 'T') continue;
        DFS(i)
        count++
    }
    return count

    function DFS(index) {
        boolArr[index] = 'T';
        for (let i = 0; i < len; i++) {
            if (M[index][i] === 0 || boolArr[i] === 'T') continue;
            DFS(i);
        }
    }

};


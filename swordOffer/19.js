// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
// 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
function printMatrix(matrix) {
    let rowLen = matrix[0].length;
    let colLen = matrix.length;
    let ans = [];
    let direction = ['R', 'D', 'L', 'U'];
    let directIndex = 0;
    let direct = 'R';
    let warn = false;
    for (let i = 0; ;) {
        for (let j = 0; ;) {
            if (warn) {
                direct = direction[(++directIndex) % 4]
                warn = false
            } else {
                ans.push(matrix[i][j]);
                if (rowLen * colLen === ans.length) {
                    return ans
                }
                matrix[i][j] = -1;
            }
            switch (direct) {
                case 'R':
                    if (j === rowLen - 1 || matrix[i][j+1] === -1) {
                        warn = true
                    } else {
                        j++;
                    }
                    break;
                case 'D':
                    if (i === colLen - 1 || matrix[i+1][j] === -1) {
                        warn = true
                    } else {
                        i++;
                    }
                    break;
                case 'L':
                    if (j === 0 || matrix[i][j-1] === -1) {
                        warn = true
                    } else {
                        j--
                    }
                    break;
                case 'U':
                    if (i === 0 || matrix[i-1][j] === -1) {
                        warn = true
                    } else {
                        i--
                    }
                    break;
            }
        }
    }
}
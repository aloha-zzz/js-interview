// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。请完
// 成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find(target, array)
{   
    let i, j;
    for(i = array.length - 1, j = 0; i > -1 && j < array[0].length;){
        if(array[i][j] === target) {
            return true;
        } else if (array[i][j] > target) {
            i--;
        } else {
            j++;
        }
    }
    return false;
}
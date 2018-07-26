/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
 * 那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 
 * 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
 * {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， 
 * {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}，
 *  {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 */ 

function maxInWindows(num, size){
    if(!num || num.length === 0){
        return null;
    }
    var max = [];
    if(num.length >= size && size >= 1){
        var index = [];

        for(var i = 0; i < size; ++i){
            while(index.length > 0 && num[i] >= num[index[index.length - 1]])
                index.pop();
            index.push(i);
        }

        for(var i = size; i < num.length; ++i){
            max.push(num[index[0]]);
            while(index.length > 0 && num[i] >= num[index[index.length - 1]])
                index.pop();
            if(index.length > 0 && index[0] <= i - size)
                index.shift();
            index.push(i);
        }
        max.push(num[index[0]]);
    }
    return max;
}
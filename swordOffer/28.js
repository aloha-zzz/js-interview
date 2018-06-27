function MoreThanHalfNum_Solution(numbers)
{
    let map = {}
    numbers.map(item => {
        if(map[item] === undefined){
            map[item] = 1;
        } else {
            map[item] += 1
        }
    })
    let len = numbers.length / 2;
    for(let i in map){
        if(map[i] > len){
            return i
        }
    }
    return 0;
}
function IsContinuous(numbers) {
    // write code 
    if(numbers.length != 5) return false
    let max = -1;
    let min = 50;
    let map = {}

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            continue;
        }
        if(map[numbers[i]]) {
            return false;
        }
        else {
            map[numbers[i]] = 1;
        }
        max = Math.max(max, numbers[i]);
        min = Math.min(min, numbers[i])
    }
    if(max - min > 4) return false;
    return true

}
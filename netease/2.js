let [n, k]=readline().split(' ');
let tower = readline().split(' ')

let option = [];
let Minus = 0;
let optionNum;
for(optionNum = 0; optionNum <= k; optionNum ++ ) {
    let tempOption = [0, 0];
    let max = tower[0];
    let min = tower[0]
    for(let i = 1; i < n; i++) {
        if(tower[i] > max) {
            tempOption[0] = i;
            max = tower[i]
        } 
        else if(tower[i] < min) {
            tempOption[1] = i;
            min = tower[i]
        }
    }
    Minus = max - min;
    if(Minus <= 1) {
        break;
    }

    tower[tempOption[0]]--;
    tower[tempOption[1]]++;
    
    option.push(tempOption)
}
    
print( Minus, optionNum)
while(option.length !== 0) {
    let num = option.shift();
    print(num[0] + 1, num[1] + 1) 
}



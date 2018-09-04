var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return '';
    } 
    if(strs.length == 1) {
        return strs[0]
    }

    let prefix = '';

    for(let i = 0; ; i++) {
        let temp = []
        strs.forEach(item => {
            temp.push(item.slice(0, i + 1));
            if(item.length < i) {
                temp.push('-1')
            }
            
        })

        if(isEqual(temp)) {
            prefix = temp[0]
        } else {
            break;
        }
    }
    return prefix
};


function isEqual(arr) {
    if([...new Set(arr)].length == 1) {
        return true; 
    }

    return false;
}
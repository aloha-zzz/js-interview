var buddyStrings = function(A, B) {
    if(A.length !== B.length) {
        return false;
    }

    if(A === B && hasSame(A)) {
        return true;
    }

    let len = A.length;
    let diffNum = 0;
    let Adiff = [];
    let Bdiff = [];
    for(let i = 0; i < len; i++) {
        if(A[i] !== B[i]) {
            diffNum++;
            Adiff.push(A[i]);
            Bdiff.push(B[i]);
        } 
    }

    if(diffNum === 2 && Adiff[0] === Bdiff[1] && Adiff[1] === Bdiff[0]) {
        return true
    }
    return false
};

function hasSame(str){
    let newArr = [...new Set(str)]
    if(newArr.length === str.length) {
        return false;
    }
    return true
}
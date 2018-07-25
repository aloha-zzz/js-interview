let curry = function(first) {
    let num = Math.pow(first, 2);
    let multi = function(input) {
        num += Math.pow(input);
        return multi
    }
    multi.value = num;
    return multi;
}
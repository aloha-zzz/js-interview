function aLogger(content) {
    console.log(content);
}



function bLogger(content) {
    console.log(content);
}

function dosomething() {
    return 'vicky'
}

function aRecord() {
    let content = dosomething();
    aLogger(content);
}


function bRecord() {
    let content = dosomething();
    bLogger(content);
}

function Func(func) {
    
    return function() {
        let content = dosomething();
        func(content)
    }
}


let temp = 10;
console.log('run')
for(let i = 0 ; i < temp; i++) {
    console.log(i);
    if(i === 6){
        throw new Error('test wrong')
    }
}

process.on('exit', (code) => {
    console.log('exit', code)
})

console.log('1234567891'.replace(/(\d+?)(?=(\d{3})+$)/g, function(m) {
    console.log(m)
    return m + ','
}))
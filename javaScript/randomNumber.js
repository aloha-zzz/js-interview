function getNumber() {
    return Math.floor(Math.random() * 7); // 0 - 6
}

function getRandom(n, m) {
    let dis = m - n + 1;
    return Math.floor(Math.random() * dis) + n; // 小的一个
}
console.log(getRandom(100, 103))

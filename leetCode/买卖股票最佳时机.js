var maxProfit = function(prices) {
    let money = 0;
    let min = prices[0];
    for(let i = 1, len = prices.length; i < len; i++) {
        let temp = prices[i];
        money = Math.max(money, temp - min);
        min = Math.min(min, temp);
    }
    return money;
};
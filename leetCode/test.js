var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(prices[i] - min, max);
    };
    return max
};
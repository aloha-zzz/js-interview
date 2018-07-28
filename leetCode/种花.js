var canPlaceFlowers = function(flowerbed, n) {
    let num = 0

    for(let i = 0; i < flowerbed.length ; i++) {
        if(flowerbed[i] === 0 && (i - 1 < 0 || flowerbed[i - 1] === 0) && (i + 1 == flowerbed.length|| flowerbed[i + 1] === 0  )){
            flowerbed[i] = 1;
            num++
        }
    }

    if(num >= n){
        return true
    }
    return false
};
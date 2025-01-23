// Max Profit


function MaxProfit(price) {
    let minPrice = price[0];  // asuming first in min
    let maxProfit = 0;

    for (let i = 1; i < price.length; i++) {
        let currentPrice = price[i];
        minPrice = Math.min(minPrice, currentPrice);
        let potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(potentialProfit, maxProfit);
    }
    console.log("Max Profit = ", maxProfit)
}


MaxProfit([7, 1, 5, 3, 6, 4])
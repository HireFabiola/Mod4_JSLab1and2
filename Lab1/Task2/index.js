function calculateTotalCost(price, quantity, taxRate){
    let totalCost = (price * quantity) * (1+taxRate)
    console.log(totalCost);
}

calculateTotalCost(2.50,1,.10)
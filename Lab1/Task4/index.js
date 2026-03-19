function calculateTotalCost(price, quantity, taxRate,  discount = 0) {

    if ((typeof price === "number" && !Number.isNaN(price)) &&
        (typeof quantity === "number" && !Number.isNaN(quantity)) &&
        (typeof taxRate === "number" && !Number.isNaN(taxRate)) &&
        (typeof discount === "number" && !Number.isNaN(discount)))
        {
        let totalCost = ((price * quantity)-(price * discount)) * (1 + taxRate)
        console.log(totalCost.toFixed(2));
    }
    else {
        console.log('Invalid input');
    }
}

calculateTotalCost(2.5,1,.10,.10)
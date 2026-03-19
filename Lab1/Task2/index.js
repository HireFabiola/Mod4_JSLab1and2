function calculateTotalCost(price, quantity, taxRate) {
    if ((typeof price === "number" && !Number.isNaN(price)) &&
        (typeof quantity === "number" && !Number.isNaN(quantity)) &&
        (typeof taxRate === "number" && !Number.isNaN(taxRate))) {
        let totalCost = (price * quantity) * (1 + taxRate)
        console.log(totalCost.toFixed(2));
    }
    else {
        console.log('Invalid input');
    }
}

calculateTotalCost(3, 1, .10)


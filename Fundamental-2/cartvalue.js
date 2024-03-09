function calculateTotalCartValue() {
    let totalValue = 0;
    for(let i=0; i<arguments.length; i++) {
        totalValue += arguments[i];
    }
    console.log(`The Total Cart Value is ${totalValue}`);
    return totalValue;
}

calculateTotalCartValue(125, 20, 30);
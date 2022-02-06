function pandaCost(singara, samosa, jilapi) {
    let totalCost = (singara * 7) + (samosa * 10) + (jilapi * 15);
    return totalCost;
}
let totalSpent = pandaCost(5, 7, 9);
console.log(totalSpent);
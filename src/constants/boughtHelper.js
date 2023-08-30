


export function totalBought(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].originalStock > 0) {
            total += inventory[i].originalStock
        }
    }
    return total;
}
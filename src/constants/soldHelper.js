


export function totalSold(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].sold > 0) {
            total += inventory[i].sold
        }
    }
    return total
}
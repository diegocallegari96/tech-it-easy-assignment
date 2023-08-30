import {totalSold} from "./soldHelper.js";
import {totalBought} from "./boughtHelper.js";


export function leftToSell(inventory) {
    return totalBought(inventory) - totalSold(inventory)
}



import {inventory} from "./inventory.js";

export function mostSold() {
    let sortedMostSold = inventory.sort((a, b) => b.sold - a.sold);
    return sortedMostSold;

}

export function cheapestFirst() {
    return inventory.sort((a, b) => a.price - b.price);

}

export function bestForSport() {
    const sortedBestForSport = inventory.sort((a, b) => b.refreshRate - a.refreshRate);
    return sortedBestForSport;

}
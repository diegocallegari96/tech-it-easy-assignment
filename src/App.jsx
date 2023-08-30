import './App.css';
import {inventory} from "./constants/inventory.js";
import {totalSold} from "./constants/soldHelper.js";
import {totalBought} from "./constants/boughtHelper.js";
import {leftToSell} from "./constants/leftToSellHelper.js";

export default function App() {
  return (
      <div>
        <div className="tile-green">
          <p>Aantal verkochte producten</p>
          <span>{totalSold(inventory)}</span>
        </div>
        <div className="tile-blue">
          <p>Aantal ingekochte producten</p>
          <span>{totalBought(inventory)}</span>
        </div>
        <div className="tile-red">
          <p>Aantal te verkopen producten</p>
          <span>{leftToSell(inventory)}</span>
        </div>
      </div>
  )
}
import './App.css';
import {inventory} from "./inventory.js"
import {totalSold} from "./constants/soldHelper.js";

export default function App() {
  return (
      <div>
        <div className="tile green">
          <p>Aantal verkochte producten</p>
          <span>{totalSold(inventory)}</span>
        </div>
        <div className="tile blue">

        </div>
        <div className="tile orange">

        </div>
      </div>
  )
}
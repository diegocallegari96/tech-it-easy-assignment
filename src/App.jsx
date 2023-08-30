import './App.css';
import React from "react";
import {inventory, bestSellingTv} from "./constants/inventory.js";
import {totalSold} from "./constants/soldHelper.js";
import {totalBought} from "./constants/boughtHelper.js";
import {leftToSell} from "./constants/leftToSellHelper.js";
import {generateTelevisionTitle, addEuroSign} from "./constants/tvOptions.js";
import {generateTelevisionSizeString} from "./constants/inchToCm.js";

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
          <div>
                      <div>
                          <img src={bestSellingTv.sourceImg} className="" />
                          {generateTelevisionTitle(bestSellingTv)}
                      </div>
                      <div>
                          {addEuroSign(bestSellingTv.price)}
                      </div>
                      <div>
                          {generateTelevisionSizeString(bestSellingTv)}
                      </div>
                      <div>
                          {bestSellingTv.options.map((option, key)=>
                              <React.Fragment key={key}>
                                  <img src={option.applicable ? './assets/check.png' : './assets/minus.png'} className="" />
                                 <span> {option.name} </span>
                              </React.Fragment>
                          )}
                      </div>

              {/*{inventory.map((television, key) => (*/}
              {/*    <React.Fragment key={key}>*/}
              {/*        <div>*/}
              {/*            {generateTelevisionTitle(television)}*/}
              {/*        </div>*/}
              {/*        <div>*/}
              {/*            {addEuroSign(television.price)}*/}
              {/*        </div>*/}
              {/*        <div>*/}
              {/*            {generateTelevisionSizeString(television)}*/}
              {/*        </div>*/}
              {/*    </React.Fragment>*/}
              {/*))}*/}
          </div>

      </div>
  )
}
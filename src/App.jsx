import './App.css';
import React from "react";
import {inventory, bestSellingTv} from "./constants/inventory.js";
import {totalSold} from "./constants/soldHelper.js";
import {totalBought} from "./constants/boughtHelper.js";
import {leftToSell} from "./constants/leftToSellHelper.js";
import {generateTelevisionTitle, addEuroSign} from "./constants/tvOptions.js";
import {generateTelevisionSizeString} from "./constants/inchToCm.js";
import {buttonHelper} from "./constants/buttonHelper.js";
export default function App() {
  return (
      <div>
          <h1>Tech it easy dashboard</h1>
       <div className="productbox">
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
          <div className="bestSellingTV">
                      <div>
                          <img src={bestSellingTv.sourceImg} className="tvPicture" />
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
          <div>
              <button onClick={ () => buttonHelper('Meest verkocht eerst')}>Meest verkocht eerst</button>
              <button onClick={ () => buttonHelper('Goedkoopste eerst')}>Goedkoopste eerst</button>
              <button onClick={ () => buttonHelper('Meest geschikt voor sport eerst')}>Meest geschikt voor sport eerst</button>
          </div>

      </div>
  )
}
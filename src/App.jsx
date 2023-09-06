import './App.css';
import React from "react";
import {inventory, bestSellingTv} from "./constants/inventory.js";
import {totalSold} from "./constants/soldHelper.js";
import {totalBought} from "./constants/boughtHelper.js";
import {leftToSell} from "./constants/leftToSellHelper.js";
import {generateTelevisionTitle, addEuroSign} from "./constants/tvOptions.js";
import {generateTelevisionSizeString} from "./constants/inchToCm.js";
import {buttonHelper} from "./constants/buttonHelper.js";
import checkLogo from "./assets/check.png"
import minusLogo from "./assets/minus.png"
import {bestForSport, cheapestFirst, mostSold} from "./constants/mostSold.js";


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
          <div><h3>Best verkochte tv</h3></div>
          <div className="bestSellingTV">
                      <div>
                          <img src={bestSellingTv.sourceImg} alt={""} className="tvPicture" />
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
                                  <img src={option.applicable ? checkLogo : minusLogo} alt={""} className="logos" />
                                 <span> {option.name} </span>
                              </React.Fragment>
                          )}
                      </div>

          </div>
          <div>
              <button onClick={ () => buttonHelper(mostSold())}>Meest verkocht eerst</button>
              <button onClick={ () => buttonHelper(cheapestFirst())}>Goedkoopste eerst</button>
              <button onClick={ () => buttonHelper(bestForSport())}>Meest geschikt voor sport eerst</button>
          </div>
          {inventory.map((television, key) => (
              <React.Fragment key={key}>
                  <div className="listOfAllTvs" >
                  <div>
                      <img src={inventory.sourceImg} alt={"TV"} className="tvPicture" />
                      {generateTelevisionTitle(television)}
                  </div>
                  <div>
                      {addEuroSign(television.price)}
                  </div>
                  <div>
                      {generateTelevisionSizeString(television)}
                  </div>
                  <div>
                          {inventory[0].options.map((option, key)=>
                              <React.Fragment key={key}>
                                  <img src={option.applicable ? checkLogo : minusLogo} alt={""} className="logos" />
                                  <span> {option.name} </span>
                              </React.Fragment>
                          )}
                  </div>
                  </div>
              </React.Fragment>
          ))}
      </div>

  )
}
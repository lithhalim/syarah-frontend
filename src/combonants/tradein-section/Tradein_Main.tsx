import React from 'react';
import First_section from './1-first-section/First_section';
import Car_Details from './2-car-details/Car_Details';
import Trade_Header from './3-trade-header/Trade_Header';
import "./style/style.scss";



function Tradein_Main() {
  return (
        <div className='tradein-container'>
            <First_section/>
            <Trade_Header/>
            <Car_Details/>
        </div>
  )
}

export default Tradein_Main

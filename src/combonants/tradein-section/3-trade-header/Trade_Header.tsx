import React, { useContext } from 'react';
import "./style/style.scss";
import {GrStatusGood} from "react-icons/gr";
import { Trade_Information_Context } from '../../../context-api/Select-Trade';



function Trade_Header() {
    const StageSelect=useContext(Trade_Information_Context);


  return (
    <div className='header-trader-section'>
        <h1>Trade/Sell Your Car</h1>
        <ul className='item-section'>
           <li> 
                <div className='container'>
                    {StageSelect.SelectStage.stage==="one"?<p className='firstNumber'>1</p>:<p className='firstNumber'><GrStatusGood style={{color:"white",fontSize:"2em"}}/></p>}
                    <p>Car Details</p>
                </div>
            </li> 
            <li> 
                <div className='container'>
                    {StageSelect.SelectStage.stage=="two"?<p className='secandNumber'>2</p>:<p className='secandNumber' style={{backgroundColor:"white",color:"blue",border:"3px solid blue"}}>2</p>}
                    <p>Contact Information</p>
                </div>
            </li> 


        </ul>
      
    </div>
  )
}

export default Trade_Header

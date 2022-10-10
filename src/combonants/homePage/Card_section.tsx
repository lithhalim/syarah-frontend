import React from 'react';
import "../homePage/5-Certified-Used/style/style.scss";

function Card_section({datause}:any) {
    const {name,image,price,month_Payment}=datause
  return (
        <div className='icon-section'>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <ul className='text-area'>
                <li>
                    <p className='title'> {name}</p>
                    <p className='month-price'>{month_Payment} SAR/month</p>
                </li>
                <li>
                    <p style={{padding:"5px 10px",textAlign:"center",fontSize:".7em"}}>VAT include</p>
                    <p className='price'>{price}</p>
                    <p className='discount'>{price/.3}</p>
                </li>
            </ul>
        </div>
  )
}

export default Card_section
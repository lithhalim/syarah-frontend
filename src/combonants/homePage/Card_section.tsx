import React from 'react';
import "../homePage/5-Certified-Used/style/style.scss";

function Card_section({datause}:any) {
    const {CarBrands,imagespostes,Price,fullName}=datause
  return (
        <div className='icon-section'>
            <div className='image-container'>
                <img src={imagespostes[0].imageUrl} alt="" />
            </div>
            <ul className='text-area'>
                <li>
                    <p className='title'> {fullName}</p>
                    <p className='month-price'>{Price} SAR/month</p>
                </li>
                <li>
                    <p style={{padding:"5px 10px",textAlign:"center",fontSize:".7em"}}>VAT include</p>
                    <p className='price'>{Price}</p>
                    <p className='discount'>{Math.floor(Price/.3)}</p>
                </li>
            </ul>
        </div>
  )
}

export default Card_section
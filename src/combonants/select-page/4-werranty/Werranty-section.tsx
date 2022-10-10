import React from 'react';
import "./style/style.scss";


import image1 from "../../../assest/pages-warrenty/warenty1.svg";
import image2 from "../../../assest/pages-warrenty/warrenty2.svg";
import image3 from "../../../assest/pages-warrenty/warrenty3.svg";
import image4 from "../../../assest/pages-warrenty/warrenty4.svg";


function Werranty_section() {

    let Datause=[
        {image:image2,name:"Buy it and try it for 10 days, Money-Back Guarantee.",text:"Buy it now with 10 days unconditional return, and full amount refund"},
        {image:image3,name:"1 Year or 20,000 km Warranty",text:"We provide you with a Free Warranty on the pieces and parts of the car in addition to the road assistance service."},
        {image:image4,name:"100+ Points Inspection",text:"We examine our used cars at more than 100 points and ensure their cleanliness and performance."}  
      ]



  return (
    <div className='warrenty-container'>
        <div className='haeder-section'>
            <img src={image1} alt="" />

        </div>
        <div className='data-container'>
            {Datause.map(({image,name,text},i)=>(
                <div key={i}>
                    <img src={image} alt="" />
                    <div className='text-area'>
                        <p className='name'>{name}</p>
                        <p className='text'>{text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Werranty_section
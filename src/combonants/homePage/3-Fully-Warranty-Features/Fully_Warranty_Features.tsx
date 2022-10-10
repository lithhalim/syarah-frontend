import React from 'react';
import image1 from "../../../assest/warenty/warenty1.webp";
import image2 from "../../../assest/warenty/warenty2.webp";
import image3 from "../../../assest/warenty/awrenty3.webp";
import image4 from "../../../assest/warenty/warenty4.webp";
import  "./style/style.scss"





let  dataUse=[image1,image2,image3,image4]

function Fully_Warranty_Features() {
  return (
    <div className='Warrenty-section'>
        <h1 className='Header-Naame-section'>
            Fully Warranty Features
        </h1>
        <div className='warenty-container'>
            {dataUse.map((data,i)=>(
                <img src={data} alt="" key={i} />
            ))}
        </div>
    </div>
  )
}

export default Fully_Warranty_Features
import React from 'react';
import footer_logo from "../../../assest/footer/footer-logo.svg";
import payment1 from "../../../assest/footer/payment1.svg"
import payment2 from "../../../assest/footer/payment2.svg"
import payment3 from "../../../assest/footer/payment3.svg"
import payment4 from "../../../assest/footer/payment4.svg"
import payment5 from "../../../assest/footer/payment5.svg"
import payment6 from "../../../assest/footer/payment6.svg"
import payment7 from "../../../assest/footer/payment4.svg"
import payment8 from "../../../assest/footer/payment8.svg"

import "./style/style.scss"


interface StyleItem{
    type:string
}

function Footer_section({type}:StyleItem) {
  return (
    <div className={`footer-container ${type}`}>
        <img src={footer_logo} alt="" />
        <div className='text-section'>
                <div className='left-side'>
                    <ul>
                        <li>Home</li> <li>Who Are You </li> <li>Call Us</li> <li>Syarah Blog</li> <li>Affiliate Markiting Program</li>
                    </ul>
                    <p>
                        A Saudi company with a commercial registry 1010538980 its source Riyadh
                    </p>
                    <p>
                        Terms and Conditions |Privacy Policy
                    </p>

                </div>
                <div className='right-side'>
                    <p>Safe Payment Methods </p>
                    <ul>
                        <li><img src={payment1} alt="" /></li>                
                        <li><img src={payment2} alt="" /></li>
                        <li><img src={payment3} alt="" /></li>
                        <li><img src={payment4} alt="" /></li>
                    </ul>
                    <ul>
                        <li><img src={payment5} alt="" /></li>
                        <li><img src={payment6} alt="" /></li>
                        <li><img src={payment7} alt="" /></li>
                        <li><img src={payment8} alt="" /></li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Footer_section
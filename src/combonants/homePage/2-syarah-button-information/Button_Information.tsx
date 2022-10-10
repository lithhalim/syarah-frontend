import React from 'react';
import image from "../../../assest/boottom-information.svg";
import "./style/style.scss"

function Button_Information() {
  return (
    <div className='container-button-information'>
        <p>
            Syarah is a registered company at the Ministry of Trade and Investment and with the support of Elm Company, with a commercial record No. 1010538980
        </p>
        <img src={image} alt="" />

    </div>
  )
}

export default Button_Information
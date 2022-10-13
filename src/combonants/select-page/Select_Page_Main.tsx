import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Trade_Information_Context } from '../../context-api/Select-Trade'
import Loading from '../loading-section/loading'
import Image_Slider from './1-image-slider/Image_Slider'
import Main_Information from './2-main-information/Main_Information'
import Car_details from './3-car-details/Car_details'
import Werranty_section from './4-werranty/Werranty-section'

function Select_Page_Main() {
  const selectPage=useContext(Trade_Information_Context)

  const {data,isFetching} = useQuery(['getPages'], async()=>{
    if(selectPage.selectPage!==false){
      let DataUse=await axios.get(`${process.env.REACT_APP_API}getPage/${selectPage.selectPage}`)
      window.localStorage.pageSelect=JSON.stringify(DataUse.data)
      return DataUse.data  
    }
  })



  if (isFetching){return <Loading/>}


  return (
    <>
      {
        data!==undefined?
          <div className='container-data-selectPage'>
              <Image_Slider images={data[0].imagespostes}/>
              <Main_Information mainInformation={data[0]}/>
              <Car_details  carDetais={data[0]}/>
              <Werranty_section/>
          </div>    
          :<></>}
    </>
  )
}

export default Select_Page_Main

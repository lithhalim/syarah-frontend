import React, { useState } from 'react';
import Select_Information from '../select-information/Select_Information_element';
import "./style/style.scss";
import DataUseHere from "../../cars-page/select-information"

function Select_Section({getDataSelect}:any) {



    let selectedData:any={}
    const DataChange=(event:any)=>{
        let Catagory=event.target.name.split("###")[0]
        let selectItem=event.target.name.split("###")[1]
        if(selectedData[Catagory]==undefined){
            selectedData[Catagory]=[selectItem]
        }else{
            if(selectedData[Catagory].includes(selectItem)){
                let newData= selectedData[Catagory].filter((data:any)=>(data!==selectItem))
                selectedData[Catagory]=newData
                if(selectedData[Catagory].length==0){
                    delete selectedData[Catagory]
                }
            }else{
                selectedData[Catagory].push(selectItem)  
            }
        }

        getDataSelect(selectedData)

    }


  return (
    <form onChange={DataChange} className="container-all-search">
        <div className='selector-header-section'>
            <h1>Filter Result</h1>
            <button>Reset</button>
        </div>
        <div className='selector-container-section'>
            {DataUseHere.map(({data,type},i)=>(
                <Select_Information optionItem={data} type={type} key={i}/>
            ))}
        </div>
        <button className='show-result-search'>
           <span> Show The Results  </span>   <span>   385</span>
        </button>
    </form>
  )
}

export default Select_Section
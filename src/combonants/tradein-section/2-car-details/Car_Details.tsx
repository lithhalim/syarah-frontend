import React, { useContext, useState } from 'react';
import "./style/style.scss";
import {Trade_Information_Context} from "../../../context-api/Select-Trade"


let dataSave:any={};
let NumberData:any;

function Car_Details() {
  const [GoNextPage,setGoNextPage]=useState(false);
  const SelectPageContext=useContext(Trade_Information_Context);




  const getAllData=(e:any)=>{

    if(e.target.name!=="fullname"&&e.target.name!=="email"&&e.target.name!=="phoneNumber"){
          //get the name of the select item
    let name=e.target.name;
    //get the option select
    let data=e.target.options[e.target.selectedIndex].text;

    if(name!==data){
      dataSave[name]=data
      NumberData=Object.entries(dataSave).length
      NumberData==7?setGoNextPage(true):setGoNextPage(false)
    }
    else{
      delete  dataSave.name
      setGoNextPage(false)
    }

    console.log(dataSave)
  }else{
    console.log(e.target.value)
  }
  }


  const submitCarDetails=()=>{
    console.log("ss")
    SelectPageContext.setSelectStage({stage:"two"})
  }






  return (
    <form className='contaiber-car-details' onChange={getAllData}>
      {SelectPageContext.SelectStage.stage=="one"?
        <>
          {DataUseHere.map(({data}:any,i:any)=>(
              <>
                  <select name={data.name} id="" key={i} placeholder={data.name} required	 >
                    {data.option.map((a:any,i:any)=>(
                      i==0?<option  key={i}>{a}</option>:<option value={a} key={i}>{a}</option>
                    ))}
                  </select>      
              </>
            ))}
            {GoNextPage==true?<div className='submit-button active' onClick={submitCarDetails}>Submit</div>:<div className='submit-button ' >Submit</div>}
        </>:<>

              <input type="text" className='input-section'  placeholder='Full Name' name='fullname'/>
              <input type="text" className='input-section'  placeholder='Email'  name='email'/>
              <input type="text" className='input-section'  placeholder='Phone Number' name='phoneNumber'/>

              {InformationDataHere.map(({data}:any,i:any)=>(
                  <>
                      <select name={data.name} id="" key={i} placeholder={data.name} required	 >
                        {data.option.map((a:any,i:any)=>(
                          i==0?<option  key={i}>{a}</option>:<option value={a} key={i}>{a}</option>
                        ))}
                      </select>      
                  </>
                ))}
                {GoNextPage==true?<div className='submit-button active' onClick={submitCarDetails}>Submit</div>:<div className='submit-button ' >Submit</div>}
        </>}
    </form>
  )
}

export default Car_Details



let DataUseHere=[
  {data: {name:"kilometer",option:["kilometer","From 0 to 50km","From 50 to 70km","From 70 to 100km","From 100 to 130km","From 130 to 170km ","From 170 to 200km","More Than 200km"]}},
  {data: {name:"Condition",option:["Condition","All-condetion","New-Car","User-Car"]}},
  {data:{name:"Option",option:["Option","All","Standard","Full","Half Full"]}},
  {data: {name:"Gear",option:["Gear","Normal","Automatic","Cvt"]}},
  {data: {name:"Fuel",option:["Fuel","Gasoline","Diesel","Hybrid","Electricity"]}},
  {data: {name:"Engine Size",option:["Engine Size","1","1.4","1.5","1.6","1.8","1.9","2","2.4","2.5","3","3.5","4","4.6","5","5.5","6"]}},
  {data: {name:"Shape Cars",option:["Shape Cars","Sedan","Pickup","SUV","CrossOvers","Sport","Hatchback","Van"]}},
]

let InformationDataHere=[
  {data: {name:"kilometer",option:["kilometer","From 0 to 50km","From 50 to 70km","From 70 to 100km","From 100 to 130km","From 130 to 170km ","From 170 to 200km","More Than 200km"]}},
  {data: {name:"Condition",option:["Condition","All-condetion","New-Car","User-Car"]}},
]

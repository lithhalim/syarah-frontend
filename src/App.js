import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import { store } from "./redux/store/store";
import { Provider } from 'react-redux';
import Header from "./combonants/header/header";
import Home_Page_Slider from "./combonants/homePage/1-Homepage-slider/Home_Page_Slider";
import Button_Information from "./combonants/homePage/2-syarah-button-information/Button_Information";
import Fully_Warranty_Features from "./combonants/homePage/3-Fully-Warranty-Features/Fully_Warranty_Features";
import Browse_by_brand from "./combonants/homePage/4-Browse-by-brand/Browse_by_brand";
import Certified_Used from "./combonants/homePage/5-Certified-Used/Certified_Used";
import Featured_Categories from "./combonants/homePage/6-Featured-Categories/Featured_Categories";
import Check_Car from "./combonants/homePage/7-Check-Car/Check_Car";
import Ceck_car2 from "./combonants/homePage/7-Check-Car/Ceck_car2";
import Financing_Options from "./combonants/homePage/8-Financing-Options/Financing_Options";
import Footer_section from "./combonants/homePage/11-Footer-section/Footer_section";
import Main_CarPage from "./combonants/cars-page/1-main-CarPage/Main_CarPage";
import Select_Page_Main from "./combonants/select-page/Select_Page_Main";
import Tradein_Main from "./combonants/tradein-section/Tradein_Main";
import {  Trade_Information_Provider } from "./context-api/Select-Trade";
const queryClient = new QueryClient();



const App=()=>{
    return(
        <Trade_Information_Provider>
                <QueryClientProvider client={queryClient}>
                        <Provider store={store}>
                                <BrowserRouter >
                                                <Routes>
                                                        <Route  path="/"  element={<><Header type="shown"/> <Home_Page_Slider/><Button_Information/> <Fully_Warranty_Features/> <Browse_by_brand/> <Certified_Used/> <Featured_Categories/> <Check_Car/> <Ceck_car2/>  <Financing_Options/> <Footer_section type="main"/> </> } />
                                                        <Route path="/cars" element={<><Header type="hidden"/>  <Main_CarPage/></>}/>
                                                        <Route path="/pages" element={<><Header type="hidden"/> <Select_Page_Main/></>}/>
                                                        <Route path="/traint" element={<><Header type="hidden"/> <Tradein_Main/> <Footer_section type="main"/></>}/>
                                                </Routes>
                                </BrowserRouter>
                        </Provider>
                </QueryClientProvider>
         </Trade_Information_Provider>
    )
}



export default App
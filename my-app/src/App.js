import Header from "./Component/Header.js/Header";
import Inventory from "./Component/Inventory/Inventory";
import Review from "./Component/Review/Review";
import Shop from "./Component/Shop/Shop";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Shipment from "./Component/Shipment/Shipment";
import Login from "./Component/Login/Login";
import { Fragment, createContext, useState } from "react";

import Protectedroute from "./Component/Protectedroute/Protectedroute";
import PrivateRouter from "./Component/Protected/PrivateRouter";
export const  userLoginconstext=createContext();
function App() {
const [loginuser,setloginuser]=useState({});

  return (
    <userLoginconstext.Provider value={[loginuser,setloginuser]}>
    <h1>email{loginuser.email}</h1>
    <Header></Header>
 
  
   <Routes>
    <Route exact path="/" element={<Shop/>} />
    <Route  path="/review" element={<Review/>} />
   
    {/* <Route path="/shipment" element={<Protectedroute>
      <Shipment/>
      
      </Protectedroute>}/>  //for single component*/}
    
    
    <Route  path="/" element={<PrivateRouter/>} >
    <Route  path="/shipment" element={<Shipment/>} />
    <Route  path="/inventory" element={<Inventory/>} />
    </Route>
   
   
    <Route  path="/login" element={<Login/>} />
   
  </Routes>  
  

    </userLoginconstext.Provider>
  );
}

export default App;

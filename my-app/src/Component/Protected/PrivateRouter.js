import React, { useContext } from 'react';
import { Route, Redirect, Routes, Navigate, Link, Outlet, useLocation } from 'react-router-dom';
import { userLoginconstext } from '../../App';
import Useauth from '../Hook/Useauth';


const PrivateRouter=() =>{
const location=useLocation();
// const auth=Useauth(); //dorkar nai
const [loginuser,setloginuser]=useContext(userLoginconstext);
return loginuser.email ? <Outlet/> :<Navigate to="/login" replace state={{form:location}} /> ;   //for nested route for multiple route


};
   
export default  PrivateRouter;

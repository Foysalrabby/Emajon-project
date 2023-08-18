import { useContext, useState } from "react";
import { userLoginconstext } from "../../App";

export default function Useauth(){
    const auth=false;
    const [loginuser,setloginuser]=useContext(userLoginconstext);
   
    if(auth === loginuser.email){
      return true ;
    }
    else{
        return false ;
    }



}
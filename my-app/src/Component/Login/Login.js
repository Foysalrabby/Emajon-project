
import {useContext, useState} from 'react';

import firebase, {initializeApp} from './firebase';
import { getAuth} from 'firebase/auth';
import { userLoginconstext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { createnewEmailandPass, handleGoogleuser, handlefacbook, handlesignout, signupwithEmailandpass } from './Loginmanager';




function Login() {
  const [singupuser,setsignupser]=useState(false);
  const [userinfo,setinfo]=useState({
    isSigned: false,
    name:"",
    email:"",
    password:"",
    photo:""

  });

  const [loginuser,setloginuser]=useContext(userLoginconstext);
  const navigate=useNavigate();
  const location=useLocation();
  //google user sign in
  const GoogleusersingnIn=()=>{
    handleGoogleuser()
    .then(res=>{
     setinfo(res);
     setloginuser(res);
     if(location.state?.form){
       navigate(location.state.form);
          }

    });

  }
//facebook signup
const facbooksignup=()=>{
 handlefacbook()
 .then(res=>{
  setinfo(res);
   setloginuser(res);
  if(location.state?.form){
    navigate(location.state.form);
       }

 });

}

//signout
const signout=()=>{
  handlesignout()
  .then(res =>{
    setinfo(res);
    setloginuser(res);

  });



}
  
  //----------------handlesubmit to take password and gmail to sign in

  const handlesubmit = (e) => {

    if(singupuser && userinfo.email && userinfo.password){
     
      createnewEmailandPass(userinfo.name,userinfo.email,userinfo.password)
      .then(res=>{
        setinfo(res);
        setloginuser(res);
        if(location.state?.form){
          navigate(location.state.form);
             }
      
       });
   
    }
    if(!singupuser && userinfo.email && userinfo.password){
      
      signupwithEmailandpass(userinfo.email,userinfo.password)
      .then(res=>{
        setinfo(res);
        setloginuser(res);
        if(location.state?.form){
          navigate(location.state.form);
             }
      
       });

   

    }
   e.preventDefault(); //jate automatic vabe submit hoy na
  
  }
//-------------onChange={handlechange} 
let isTwofiedValid =true;

const handlechange = (e) => {

     console.log(e.target.name,e.target.value);
     if(e.target.name==="email"){
      var isTwofiedValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
       console.log(isTwofiedValid); 

     }

     if(e.target.name === "password"){

      var isTwofiedValid=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(e.target.value);
      console.log(isTwofiedValid);
     }
     //towfillesd valid then isTwofiedValid take set korbo
     if(isTwofiedValid){

     const newuserinfo={...userinfo};
     newuserinfo[e.target.name]=e.target.value; //jetatae click korbo sttar value set hobe
     setinfo(newuserinfo); //and see to the authentication ptag

     }

}



  return (
    <div style={{textAlign:'center'}}>
    {
     userinfo.isSigned ?<button onClick={signout}>singnout</button>:
     <button onClick={GoogleusersingnIn}>Sign in</button> //like if (userinfo.isSigned == true)
     //<button onClick={handlesignout}>singnout</button>:
    }
   {
    <button onClick={facbooksignup}>sing in facebbok</button>
   }
     
     {
      userinfo.isSigned && <div>
      <p>{userinfo.name}</p>
      <p>{userinfo.email}</p>
      <img src={userinfo.photo} alt="m" srcset="" />
      </div>
     }
     <h1> Your authentication...</h1>
     <p>Email: {userinfo.email}</p>
     <p>password: {userinfo.password}</p>
      <input type="checkbox" onChange={()=>setsignupser(!singupuser)}  name="checkbox" id="" />
      <label>New user</label>
       <form onSubmit={handlesubmit}>
        {singupuser && <input type="text" name="name" onChange={handlechange} placeholder="Enter your name" />} <br></br>
        <input type="text" name="email" onChange={handlechange} placeholder="Enter your email" required /><br></br>
        <input type="password" name="password" onChange={handlechange}  placeholder="Enter your password" required/><br/>
        <input type="submit" value={singupuser?"sign up" :"submit"}/>

       </form>
       <p style={{color:'red'}}>{userinfo.error}</p>
      {userinfo.success && <p style={{color:'green'}}>{singupuser ? "created" :"login"}</p>}

    </div>
  );
}



export default Login;
import firebase, {initializeApp} from './firebase';
import { getAuth} from 'firebase/auth';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup , GoogleAuthProvider} from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import {  signOut } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { userLoginconstext } from '../../App';


const provider1 = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();

export const handleGoogleuser=()=>{

    const auth = getAuth();
   return signInWithPopup(auth,provider)
    .then(res =>{
      const {displayName,email,photoUrl}=res.user;
      const userdata = {
           isSigned:true,
           name : displayName,
           email : email,
           photo :photoUrl
          


      }
      return userdata;
      
      console.log(displayName,email,photoUrl);
    }).catch(error =>{
      console.log(error.message);
    })
  
  };


  //handle facebbok
export const handlefacbook=()=>{
    const auth = getAuth();
   return signInWithPopup(auth, provider1)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
         user.success=true; 
        return user;
        
        console.log(user);
    
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
    
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
    
        // ...
      });
    
    }


  export  const handlesignout=()=>{

        const auth = getAuth();
       return signOut(auth)
        .then(res => {
          const sinoutuser={
           isSigned:false,
           name:'',
           email:'',
           password:'',
           photo:'',
           error:'',
           success:''
           
            
          }
      return sinoutuser;
       console.log(res);
    
        }).catch(error=>{
          console.log(error);
    
        });
          
        console.log("clicked");
    
      }

     export const createnewEmailandPass=(namex,email,password)=>{

        const auth = getAuth();
      return  createUserWithEmailAndPassword(auth,email, password)
          .then((res) => {
            const newuserDISmess=res.user;
            newuserDISmess.success=true;
            newuserDISmess.error='';
            usernameOtherinfo(namex);
            return newuserDISmess;
            // Signed in 
           // const user = userCredential.user;
            //console.log(user);
  
            // ...
          })
          .catch((error) => {
            const newuserDISmess={};
            newuserDISmess.success=false;
            newuserDISmess.error=error.message;
            return newuserDISmess;

            //const errorCode = error.code;
            //onst errorMessage = error.message;
            //console.log(errorMessage);
            //setinfo(newuserDISmess);
            // ..
          });

      }

      export const signupwithEmailandpass=(email,password)=>{

        const auth = getAuth();
       return signInWithEmailAndPassword(auth,email, password)
          .then((res) => {
            const newuserDISmess=res.user;
            newuserDISmess.success=true;
            newuserDISmess.error='';
         return newuserDISmess;
            console.log("when sign up user name and details",res.user);
          })
          .catch((error) => {
            const newuserDISmess={};
            newuserDISmess.success=true;
            newuserDISmess.error=error.message;
            return newuserDISmess;
            //const errorCode = error.code;
            //const errorMessage = error.message;
          });


      }

      //to takeusername and dispaly
const usernameOtherinfo = namex =>{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName:namex
       
      }).then(() => {
        console.log("Update the name successfully");
      }).catch((error) => {
        console.log(error);
      });
    
    }
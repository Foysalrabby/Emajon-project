import { Navigate } from "react-router-dom";

import Useauth from "../Hook/Useauth";
import { useContext } from "react";
import { userLoginconstext } from "../../App";


function Protectedroute({ children }) {
  const [loginuser,setloginuser]=useContext(userLoginconstext);
  const auth = Useauth();
  return auth.loginuser.email ? children :<Navigate to="/login" />; //for one componet or single route
}

export default Protectedroute;

import React, { useContext } from 'react';
import alogo from '../../images/logo.png';
import './Header.css';
import {Link, Router } from 'react-router-dom';
import { userLoginconstext } from '../../App';

const Header = () => {

    const [loginuser,setloginuser]=useContext(userLoginconstext);
    return (
        <div>
           <div className="logo">
           <img src = {alogo} height={100} width={200} alt="LOGO"/>
        
           </div> 
           <div className="sub">
           <ul>
           
               <li><Link className='customlink' to ="/">Shop </Link></li>
               <li><Link className='customlink' to ="/review"> Order Review</Link></li>
               <li><Link className='customlink' to ="/inventory">Manage Inventory</Link></li>
               <li><button onClick={()=>setloginuser("")}> Signout</button></li>
                
        
           
           </ul>
           </div>

        </div>
    );
};

export default Header;
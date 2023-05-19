import React from 'react';
import alogo from '../../images/logo.png';
import './Header.css';
import { Router } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <div className="logo">
           <img src = {alogo} height={100} width={200} alt="LOGO"/>
        
           </div> 
           <div className="sub">
           <ul>
           
                <li><a href="/">Shop </a></li>
                <li><a href="/review"> Order Review</a></li>
                <li><a href="/inventory">Manage Inventory</a></li>
          
 
           
           </ul>
           </div>

        </div>
    );
};

export default Header;
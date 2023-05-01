import React from 'react';
import alogo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
           <div className="logo">
           <img src = {alogo} height={100} width={200} alt="LOGO"/>
        
           </div> 
           <div className="sub">
           <ul>
            <li>
                <li><a href="/shop">Shop </a></li>
                <li><a href="/"> Order Review</a></li>
                <li><a href="/catagory">Manage Inventory</a></li>
                
               
            </li>
           </ul>
           </div>

        </div>
    );
};

export default Header;
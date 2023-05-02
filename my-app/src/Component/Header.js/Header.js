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
            
                <li><a href="">Shop </a></li>
                <li><a href=""> Order Review</a></li>
                <li><a href="">Manage Inventory</a></li>
                
               
           
           </ul>
           </div>

        </div>
    );
};

export default Header;
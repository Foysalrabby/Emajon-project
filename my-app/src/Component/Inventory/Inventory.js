import React, { useContext } from 'react';
import { userLoginconstext } from '../../App';

const Inventory = () => {
    const [loginuser,setloginuser]=useContext(userLoginconstext);
  
    return (
        <div>
            <h1> {loginuser.email}</h1>
        </div>
    );
};

export default Inventory;
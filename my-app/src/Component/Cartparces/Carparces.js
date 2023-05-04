import React from 'react';
import './Cartparces.css';
const Carparces = (props) => {
    const cartdata=props.cartdata;
    
    
    return (
        <div className="cartitem-view">
          <h5> Order sumary: {cartdata.length}</h5>
            <h6> </h6>
            <p>price : </p>
            <p>Vat :</p>
            <p>Total price :</p>           
        </div>
    );
};

export default Carparces;
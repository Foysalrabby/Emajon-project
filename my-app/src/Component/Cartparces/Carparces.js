import React from 'react';
import './Cartparces.css';
import { Link } from 'react-router-dom';
const Carparces = (props) => {
    const cartdata=props.cartdata;
    let totalprice = 0;
  for(let i=0 ; i < cartdata.length;i++){
   const productprice=cartdata[i];
    totalprice=totalprice+(productprice.price)*productprice.quantity;

  }
  //use reduce same work to  for loop  for price
  //const prices = cartdata.reduce((sum,totalsprice)=> sum + totalsprice.price,0);
  let shiping=0;
  let tax=0;
  let finalcost = 0;
  if( totalprice > 0 && totalprice < 900 ){
    shiping = 40;

  }
  else if( totalprice >900 && totalprice>1000){
       shiping=20;
  }
   
    tax=(totalprice/100);
    
    finalcost=tax+totalprice+shiping;
    
    return (
        <div className="cartitem-view">
          <h5> Order sumary: {cartdata.length}</h5>
           
            <p>price : {totalprice}</p>
            <p>Shiping :{shiping}</p>
            <p>Tax :{tax}</p>
            <p>Total price :{finalcost}</p>  
            <Link to="/review">
            <button  className="btn-buy">Review</button>  
            </Link>
                   
        </div>
    );
};

export default Carparces;
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDb } from '../../utilities/fakedb';
import { getShoppingCart } from '../../utilities/fakedb';

const Review = () => {
   const [cart1,setcart1]=useState([]);

useEffect(()=>{
  const product = getShoppingCart();
  const productkey=Object.keys(product);  
   //to get product name in local storage
    const counts = productkey.map(key => product[key] ); //to get product quantity in local storage
    const cartproduct=productkey.map(key => {
    const  matchproduct = fakeData.find(pd => pd.id === key);
        matchproduct.quantity =  product[key];
        return matchproduct;    
  });
  console.log(productkey);
  console.log(product);
  console.log(counts);
  console.log(cartproduct);
  setcart1(cartproduct)

},[])
    return (
        <div>
        <h1>{cart1.length}</h1>
            
        </div>
    );
};

export default Review;
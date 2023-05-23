import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import { getShoppingCart } from '../../utilities/fakedb';
import Itemreview from '../Itemreview/Itemreview';
import './Review.css';
import Carparces from '../Cartparces/Carparces';

const Review = () => {
   const [cart1,setcart1]=useState([]);

   const haldleremove=(productskey)=>{
    console.log("clicked",productskey);
    const newcart=cart1.filter(pd => pd.id !== productskey);
      setcart1(newcart);
      removeFromDb(productskey);
   }

useEffect(()=>{
  const product = getShoppingCart();
  const productkey=Object.keys(product);  
   //to get product name in local storage
   // const counts = productkey.map(key => product[key] ); //to get product quantity in local storage
    const cartproduct=productkey.map(key => {
    const  matchproduct = fakeData.find(pd => pd.id === key);
        matchproduct.quantity =  product[key];
        return matchproduct;    
  });
 // console.log(productkey);
  //console.log(product);
  //console.log(counts);
  console.log(cartproduct);
  setcart1(cartproduct)

},[])
    return (
        <div className="main_reviewsection">
        <div className="itemdisplay">
        <h1>Totalt Item :{cart1.length}</h1>
        {
          cart1.map(item => <Itemreview
          key={item.id}
          haldleremove={haldleremove}
          cartdada={item}
          >

          </Itemreview>)
        }
        </div>
        <div className="itemsection2">
          <Carparces cartdata={cart1}></Carparces>
        </div>
       
        
            
        </div>
    );
};

export default Review;
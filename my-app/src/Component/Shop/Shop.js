import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Productde from '../Product/Productde';
import Carparces from '../Cartparces/Carparces';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
  //console.log(fakeData);
  const fakedatsize=fakeData.slice(0,10);
  const[products,setproduct]= useState(fakedatsize);
  console.log(products);

 useEffect(()=>{
  const getproduct=getShoppingCart();
  const productkey=Object.keys(getproduct);
   const prevouscartpo=productkey.map(exitingkey =>{
    const productmatch=fakeData.find(pdkey=>pdkey.id ===exitingkey);
    productmatch.quantity=getproduct[exitingkey];
    return productmatch;
    

   })
  setcart(prevouscartpo);

 },[]);

 const [cart,setcart]=useState([]);
 const handlecart=(product)=>{
 //console.log("clicked",product);
 const productadded = product.id;
  const sameproduct = products.find(pd => pd.id === productadded);
  
  let counts = 1;
  let newchart;
  if(sameproduct)
  {
     counts = sameproduct.quantity + 1; 
    sameproduct.quantity = counts;
    const others = cart.filter( pd =>pd.id !== productadded);
    newchart=[...others,sameproduct];

  }
  else{
    sameproduct.quantity=1;
    newchart=[...cart,sameproduct];
  }

  
 setcart(newchart);
   
 addToDb(product.id,counts);
 
 }
 
    return (
        <div className="shopviews">
            <div className="product-itemview">
             {
                products.map( pd => <Productde 
                key ={pd.id}
                 productdata={pd}
                 handlecart={handlecart}
                  >
                </Productde>)
             }
            </div>
            <div className="price-itemview">
             <h3>Total Purchesview</h3>
              <Carparces cartdata={cart}>
              <Link to="/review">
            <button  className="btn-buy">Review</button>  
            </Link>
              </Carparces>
            </div>
        </div>
    );
};

export default Shop;
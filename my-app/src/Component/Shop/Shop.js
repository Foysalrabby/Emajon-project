import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Productde from '../Product/Productde';
import Carparces from '../Cartparces/Carparces';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
  //console.log(fakeData);
  const fakedatsize=fakeData.slice(0,10);
  const[products,setproduct]= useState(fakedatsize);
  console.log(products);
 const [cart,setcart]=useState([]);
 const handlecart=(product)=>{
 console.log("clicked",product);
 const newcart=[...cart,product];
 setcart(newcart);
  const sameproduct= newcart.filter(pd =>pd.id === product.id);
  const count=sameproduct.length;   
 addToDb(product.id,count);
 
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
              <Carparces cartdata={cart}></Carparces>
            </div>
        </div>
    );
};

export default Shop;
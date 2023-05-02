import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Productde from '../Product/Productde';




const Shop = () => {
  //console.log(fakeData);
  const fakedatsize=fakeData.slice(0,10);
  const[products,setproduct]= useState(fakedatsize);
  console.log(products);

    return (
        <div className="shopviews">
            <div className="product-itemview">
             {
                products.map( pd => <Productde 
                 productdata={pd} >

                </Productde>)
             }
            </div>
            <div className="price-itemview">
              <p>this is price itemviews</p>
            </div>
        </div>
    );
};

export default Shop;
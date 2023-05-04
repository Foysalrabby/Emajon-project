import React from 'react';
import './Productde.css';

const Productde = (props) => {
   // console.log(props.product.price)
   const {name,img,price,seller,} = props.productdata;
    return (
        <div className="Product-itemview">
        <div className="imge-view">
        {/* <img src={require({img})} alt="m" width="200px"  height="200px"/> */}
        <img src={img} width="200px"  height="200px" alt="m" />
        </div>
        <div className="describ-view">
            <h4><a href="#">{name}</a></h4>
            <p>by: {seller}</p>
            <h5>Price {price}</h5>
           
            <button onClick={()=>props.handlecart(props.productdata)} className="btn-buy">Buy</button>
        </div>
          
        </div>
    );
};

export default Productde;
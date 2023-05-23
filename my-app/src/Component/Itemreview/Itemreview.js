import React from 'react';

const Itemreview = (props) => {
    //console.log(props.cartdada);
    const {name,quantity,price,id}=props.cartdada;
    const stylemn={
        borderBottom: '1px solid gray',
        paddingBottom:'10px',
        marginLeft:'20px'
    }
    return (
        <div className="ItemMn" style={stylemn}>
            <h3>{name}</h3>
            <p>Quantity :{quantity}</p>
            <p><small>price:{price}</small></p>
            <button onClick={()=> props.haldleremove(id)} className="btn">Remove</button>
        </div>
    );
};

export default Itemreview;
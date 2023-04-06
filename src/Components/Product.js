import React from 'react';



const Product = (props) => {
  return (
    
    <div>
        <h1>{props.Name}</h1>
        <img src={props.ank} height="200px" width="300px"></img>
        <p align="center"style={{fontSize:"20px"}}>{props.Price}</p>
        <p style={{fontSize:"20px"}}>{props.Description}</p>
    </div>
  )
}

export default Product
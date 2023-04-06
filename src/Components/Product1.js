import React from 'react';
import Product from "./Product";
import Image from "../Assets/1.jfif";

const Product1 = () => {
  return (
    
    <div className="App1">
   
     <Product Name="Question1" ank={Image} Price="3000" Description="this is an hight and low cost"/>
     <Product Name="Question2" ank={Image} Price="2000" Description="this is an bright and low cost"/>
    <Product Name="Question3" ank={Image} Price="1000" Description="this is an sunny and low cost"/>
  
    </div>
  )
}

export default Product1
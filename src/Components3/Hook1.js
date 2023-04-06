import React, { useState } from 'react';
import img1 from "../Assets/P.jpg";
import img2 from "../Assets/R.jpeg";

const Hook1 = () => {
    const [num,setnum]=useState("red");
    // function Increment(){
    //     setnum(num+1);
    // }
    // function Decrement(){
    //     if(num<=0)
    //     {
    //         return false
    //     }
    //     else{
    //         setnum(num-1);
    //     }
       
    // }
    // function ImageChange(){
    //         setnum(img2)
    //      }
    function TextChange(){
              setnum("green")
              }
  return (
    <div>
        
{/* <button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button> */}
{/* <img src={num} heigth="200px" width="200px" alt="logo" />
<button onClick={ImageChange}>Change Image</button> */}
<button onClick={TextChange}>Change Image</button>
<h1 style={{backgroundColor:num}}>Text</h1>
    </div>
  )
}

export default Hook1
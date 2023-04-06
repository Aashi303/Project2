import React from 'react';
import img1 from "./Assets/P.jpg";
import img2 from "./Assets/R.jpeg";

const New = () => {
    // const arr=[1,2,3,4,5];
    // const newarr=arr.filter((num)=>
    // {
    //     if(num==3)
    //     {
    //         return false;
    //     }
    //     else 
    //         return true;
    // });
    const images=[{
        id:1,
        pic:img1,
    },
    {
        id:1,
        pic:img2,
    },
];
  return (
    <div>
       {/* {arr.map((value)=>{
            return <h1>The array Items are: {value}</h1>;
        })} */}
        {/* {newarr} */}
        {images.map((val) => {
           
           return <img src={val.pic} heigth="200px" width="200px" alt="logo" />
            
        })}
        {/* <img src={img1} heigth="200px" width="200px" alt="logo" /> */}
    </div>
  )
}

export default New
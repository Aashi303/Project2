import React, { useState } from 'react';
import Gallery from '../Gallery';

const Hook5 = () => {
    const[images,setImage]=useState(Gallery);
    const allitem=()=>
    {
        const finaldata=Gallery.filter((value)=>
        {
            return value;
        });
        setImage(finaldata);
    }
    const OnP=(catItem)=>
    {
        const finaldata=Gallery.filter((value)=>
        {
            return value.category==catItem;
        });
        setImage(finaldata);
    }
    const OnR=(catItem)=>
    {
        const finaldata=Gallery.filter((value)=>
        {
            return value.category==catItem;
        });
        setImage(finaldata);
    }
    const OnQ=(catItem)=>
    {
        const finaldata=Gallery.filter((value)=>
        {
            return value.category==catItem;
        });
        setImage(finaldata);
    }

  return (
    <div>
    <button onClick={()=>OnP("Python")}>Show P</button>
    <button onClick={()=>OnQ("React")}>Show Q</button>  
    <button onClick={()=>OnR("Query")}>Show R</button> 
    <div>
        {
            images.map((val)=>
            {   
                return( <div>
                    <img src={val.pic} />
                    </div> ) 
                
            }

            )
        }
        </div> 
    </div>
  )
}

export default Hook5
import React, { useEffect, useRef } from 'react'

const Hook8 = () => {
    const divelement=useRef();
    useEffect(()=>
    {
        console.log("The height of div is:",divelement.current.offsetHeight);
    },[]);
  return (
    <div ref={divelement}>
        <h1> Learn Useref </h1>
    </div>
  );
}

export default Hook8
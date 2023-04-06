import React, { useState } from 'react';

const Hook2 = () => {
    const [show,setShow]=useState(false);
    const [buttonText,setbuttontext]=useState("Show");
    const [text,setText]=useState(' ');
    function ButtonText() {
        setShow(!show)
        console.log(show);
         if( show === false) {
            setbuttontext("Hide")
            setText("Hello")
        } else {
            setbuttontext("show")
            setText(" ") 
        }
      }
  return (
    <div>
        <button onClick={ButtonText}>{buttonText}</button>
        <h1>{text}</h1>
    </div>
  )
}

export default Hook2
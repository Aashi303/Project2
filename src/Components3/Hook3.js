import React, { useState } from 'react'

const Hook3 = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");

    function handleChange(event)
    {
        
        setFirstName(event.target.value);
               
    }
    function handleChange1(event)
    {
        
        setLastName(event.target.value);
               
    }
  return (
    <div>
        <input name="firstName" value={firstName} onChange={handleChange}/>
        <input name="lastName" value={lastName} onChange={handleChange1}/>
        <h1>{firstName} {lastName}</h1>
        
    </div>
  )
}

export default Hook3
import React, { createContext, useState } from 'react'
import Comp2 from './Comp2';
import UserContext from './Usercontext';

const Comp1 = () => {
    // const Usercontext=createContext();
    const[user,setuser]=useState("Ankita Tiwari");
  return (
    <UserContext.Provider value={user}>
        <h1> {`hello ${user}`}</h1>
        <Comp2/>
    </UserContext.Provider>
  )
}

export default Comp1
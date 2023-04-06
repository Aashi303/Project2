import React, { useContext } from 'react'
import UserContext from './Usercontext';
// import { useAsyncError } from 'react-router-dom';

const Comp4 = () => { 
    const user=useContext(UserContext);
  return (
    <div>
        <h1> Component 4</h1>
        <h2>{`hello ${user} again!`}</h2>

    </div>
  )
}

export default Comp4
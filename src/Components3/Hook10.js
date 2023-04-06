import React, { useReducer } from 'react'

const Hook10 = () => {
    const [sum,dispatch]=useReducer((state,action)=>{
    return state+action;
} ,20);
  return (
    <div align="center">
        <h1 align="center">{sum}</h1>
        <button onClick={()=>dispatch(2)}>Add 1</button>
    </div>
  )
}

export default Hook10
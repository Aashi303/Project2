import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
  const shoot=()=>{
    alert("Great shot!!");
  }
  const shoot1=()=>{
    alert("Great shot too!!");
  }
  return (
   <><h1> Welcome Home </h1>
    <button onClick={shoot}> Take the shot!</button>
    <button onDoubleClick={shoot1}> Take the shot!</button>
    </> 
  )
}

Home.propTypes = {}

export default Home
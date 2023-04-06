import React, { useState } from 'react'

const Hook4 = () => {
    const[firstName,setFirstName]=useState("");
    const[toDoList,settodolist]=useState([]);
    function handleChange(event)
    {
         setFirstName(event.target.value);
               
    }
    const OnAdd=()=>
    {
            settodolist([...toDoList,firstName]);
    };
    const OnDelete=(taskname)=>
    {
           
            settodolist(
                toDoList.filter((task)=>
                {
                    if(task!==taskname)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                })
    )};

  return (
    <div>
        <input name="firstName" value={firstName} onChange={handleChange}/>
        <button onClick={OnAdd}>Add Task</button>
       
        <div>
        {toDoList.map((task) => {
           
           return (
            <div>
           <p> {task} </p>
           <button onClick={()=>OnDelete(task)}>Remove Task</button>
           </div>
           );
            
        })}
        </div>
    </div>
  )
}

export default Hook4
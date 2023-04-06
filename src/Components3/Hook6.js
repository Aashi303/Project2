import React, { useEffect, useState } from 'react'

const Hook6 = () => {
    const[count,setcount]=useState(0);
    const[calculation,setcal]=useState(0);
    const date = new Date();
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
      useEffect(() => {
        const timer = setInterval(() => {
          const date = new Date();
          setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
          });
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setcount((count)=>count+1);
            
    //     },1000);
    // })
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setcount((count)=>count+1);
            
    //     },1000);
    // },[]) //for static and fixed one time rendering
    // useEffect(()=>
    // {
    //     setcal(()=>count*2);
    // },[count]);
    // useEffect(()=>{
    //     setInterval(() => {
    //         sett(t);
            
    //     },1000);
    // },[])
  return (

    <div>
        {/* <h1> I have rendered {count} times!</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setcount((c)=>c+1)}>+</button>
        <p>Calculation:{calculation}</p> */}
        <div>
       <h1 align="center">{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}</h1> 
      </div>
    </div>
  )
}

export default Hook6
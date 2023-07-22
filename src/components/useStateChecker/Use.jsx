import React, { useState } from 'react'

const Use = () => {
    console.log("I am rendered before")
    const[count , setCount ] = useState(0);
    console.log(count);
    console.log("I am rendered")
  return (
    <div>
        <h2>{count}</h2>   
        <button onClick={()=>{setCount(count+1)}}>click</button> 
    </div>
  )
}

export default Use
import React, { useEffect } from 'react'

const Children = (prop) => {
  const Name = prop.obj.name ; 
  console.log(Name ) ;
  useEffect(()=>{
    console.log("I am the children use Effect !! ");
  })
  return (
    <div>{Name}</div>
  )
}

export default Children
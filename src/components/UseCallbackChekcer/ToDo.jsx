import React, { useCallback, useState } from 'react'
import ToDoItems from './ToDoItems';

const ToDo = () => {
  console.log("I am main  rendered");
  const[count , setCount ] = useState(0);
  const[items , setItems ] = useState([]);
  const clickHandler = ()=>{
    setCount(count+ 1);
  }
  const newItemadder  = useCallback(()=>{
    setItems([...items , "new Item"]);
  } , [items]) ;
  return (
    <div>
        <h1>To-Do</h1>
        <ToDoItems items = {items } newItemadder={newItemadder}  />
        <br />
        <p>{count}</p>
        <button onClick={clickHandler}>counter</button>
    </div>
  )
}

export default ToDo;
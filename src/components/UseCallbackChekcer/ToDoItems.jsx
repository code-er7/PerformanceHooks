import React from "react";
import Use from "../useStateChecker/Use";
import { memo } from "react";
const ToDoItems = ({ items, newItemadder }) => {
  console.log("child compo rendered");
  return (
    <>
      {items.map((item, index) => {
        return <h3 key={index}>{item + index}</h3>;
      })}
      <button onClick={newItemadder}>New Item</button>
    </>
  );
};


//In parent component if the props of this components won't change then on re-rendering thid component won't 
//be rerendered and it will save time .
export default memo(ToDoItems);

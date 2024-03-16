import * as React from "react";
import { ReactNode } from "react";

interface Iprops{
    title:ReactNode;
    onClick?:() => void
}
const Button = ({title,onClick}:Iprops) => {
  return (
    <button   onClick={onClick}
    style={{
      padding: "10px 20px",
      fontSize: "1.2em",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "blue",
      color: "white",
      border: "none",
    }}>{title}</button>
  )
}

export {Button};
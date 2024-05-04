import React from "react";

const Button = ({children,className}) =>{

  return (
    <button className={`btn ${className}`} >
      {children}
    </button>
  )
}

export default Button;
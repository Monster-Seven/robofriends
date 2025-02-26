import React from "react";

export const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: 'black solid 1px', height: '600px' }}>
      {props.children}
    </div>
  )     
}
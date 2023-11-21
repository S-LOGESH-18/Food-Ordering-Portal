import React from 'react'
import { UseState,UseEffect } from 'react';
const error1 = ({child}) => {
    const [error,seterr]=UseState(null);
    UseEffect(()=>{
          const add=(event)=>
          {
              seterr(event.error|| new Error("unused"));
          };
          window.addEventListener('error',add);
          return()=>{
              window.removeEventListener('error',add)
          }
    })
    if(error)
    {
      return (<div>error:{error.message}</div>
      )
    }
      return child;
}

export default error1
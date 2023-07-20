import React, { useState } from 'react'

function Count() {
    const[n, number] =useState(0)
  return (
    <>
    
    <button onClick={()=>number(n+1)}>+</button>

    <h2>{n}</h2>
    <button onClick={()=>number(n-1)}>-</button>
    
    
    </>
  )
}

export default Count
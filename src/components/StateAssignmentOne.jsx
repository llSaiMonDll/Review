import React from 'react'
import { useState } from 'react';

function StateAssignmentOne() {

    const[num, setNum] = useState(0);
    function handleClick(){
        setNum(num+1);
    }

  return (
    <section className ="SA1">
        <button onClick={handleClick}>{num}</button>
    </section>
  )
}

export default StateAssignmentOne
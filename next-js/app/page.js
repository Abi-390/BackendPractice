"use client"
import React, { useState } from 'react'

const page = () => {


  const [num, setNum] = useState(0);

  const increaseNum =()=>{
   setNum(num+1);
  }

  return (
    <div>
      <h1>Current value of num is {num}</h1>
      <button onClick={increaseNum} className='px-5 py-2 bg-green-400 rounded m-5'>Increase Num</button>
    </div>
  )
}

export default page

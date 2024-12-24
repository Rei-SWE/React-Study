import React, { useState } from 'react';

export default function Counter({total, handlCount}) {
  const [count, setCount] = useState(0);
  return (
    <div className='container'>
      <p className='numberScreen'>
        {count}<span className='total'>/{total}</span>
      </p>
      <button 
        className='countNum'
        onClick={() => {
          setCount((prev) => prev + 1);
          {handlCount()}
        }}
        >
        Add➕
      </button>
    </div>
  )
}
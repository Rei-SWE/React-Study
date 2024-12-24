import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [ pointer, setPointer ] = useState({ x: 0, y: 0});
  const movePointer = (e) => {
    setPointer({ x : e.clientX, y: e.clientY })
  }
  return (
    <div className='container'
     onPointerMove={movePointer}>
      <div 
        className='pointer' 
        style={{ transform: `translate(${pointer.x}px, ${pointer.y}px)`}}
      />
    </div>
  );
}

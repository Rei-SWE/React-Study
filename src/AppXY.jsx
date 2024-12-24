import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [movePont, setMovePont] = useState({ x: 0 , y:0});
  const moving = (e) => {
    setMovePont({x: e.clientX, y: e.clientY})
  };

  return (
    <div className='container' 
      onPointerMove={moving}>
      <div className='pointer' style={{ transform: `translate(${movePont.x}px, ${movePont.y}px)` }} />
    </div>
  );
}

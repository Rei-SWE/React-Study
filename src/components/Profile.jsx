import React from 'react';
import Avartar from './Avatar'
// import './App.css';



export default function Profile({image, name, title, status}) {
  return (
    <div className='profile'>
      <Avartar 
        image={image}
        status={status}
        />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  )
}
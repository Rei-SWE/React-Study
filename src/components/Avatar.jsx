import React from 'react';

export default function ProductPhoto({image, status = 'old'}) {
  return (
    <>
      <img className='photo'
        src={image}
        alt="avatar"
        category = {status}
        />
      {status !== 'old'? <NewBadge /> : null}
    </>
  )
}

function NewBadge() {
  return (
    <>
      <div className='badege'>NEW</div>
    </>
  )
}
import './App.css';
import Counter from './components/Counter'
import React, { use, useState } from 'react';



export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handler = () => { setCount(count + 1) }
  return (
    <div className='totalBox'>
      <div className='totalCount'>
        Total Count : {count} { count < 10? '🔥' : '🧊' } 
      </div>
      <Counter 
        total={count}
        handlCount={handler}
      />
      <Counter 
        total={count}
        handlCount={handler}
      />
    </div>
  )
}






































// handleClick은 함수 자체(setCount(prev => prev + 1)를 전달함
// Counter 컴포넌트에 propd을 전달 {count}와 {handleClick}
// onClick 이벤트 실행 시점: 함수가 전달된 후, Counter 컴포넌트 내에서 onClick 이벤트가 발생할 때,
// 해당 함수가 실행됩니다. 이 시점에서 handleClick 함수가 호출되고, 전달된 함수가 실행되어 count 상태가 업데이트됩니다.
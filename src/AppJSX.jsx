import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '하루'
  const list = ['딸기', '키위', '바나나']
  const lists = list.map((item, index) =>
    <li key={index}>{item}</li> 
  )
  return (
    <>
      <h1 className = 'orange'>{`Hello ${name}`}</h1>
      <h2>만나서 반가워</h2>
      <h3>내 이름은 {name}야</h3>
      <ul>{lists}</ul>
      <img
        style={{
          width: '200px',
          height: '200px',
          // 자바스크립트에서 오브젝트 문법을 이용해 객체의 값을 전달
        }}
        src='https://images.unsplash.com/photo-1721332154191-ba5f1534266e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D'
        alt='Smasung'
      />
    </>
  );
}

export default AppJSX;

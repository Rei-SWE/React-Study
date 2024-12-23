import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './AppProfile';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 'root' 라는 ID element를 가져와서  createRoot AIP(브라우저에서 제공)를 통해 루트를 만들어준다. (시작 포인트)
// 'root'에 첫번째 컴포넌트를 렌더링한다. <App />
// 개발할떄는 엄격한모드(StrictMode)에서 개발하고 (경고나 워딩을 받아 볼 수 있다.)
// 배포할때는 자동으로 엄격모드가 해제된다.
root.render(
  <React.StrictMode>
    <AppProfile /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

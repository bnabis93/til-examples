import React from 'react'
import Hello from './Hello'
import './App.css';

function App(){
  const tempHello = "Hello World"
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return (
    <>
    {/* 요렇게 주석을 쓰는구먼ㄴ */}
      <Hello />
      <Hello />
      <div style={style}>{tempHello}</div>
      <div className="gray-box"></div>
      <div className="black-box"></div>
      <div className="gray-box"></div>
      <div className="black-box"></div>
    </>
  );
}

export default App;
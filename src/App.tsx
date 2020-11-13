import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './views/components/Header'

// 리액트란?
// UI 라이브러리

// 프론트엔드가 하는일? 
// 백엔드에서 데이터를 가져와서, 사용자가 보기 편한 상태로 보여준다. -끝.

// 2014년 이전, <- 프론트엔드의 개념 자체가 희박.
// 프론트엔드가 일을 더 많이한다. 집에는 잘간다. 왜냐면 서비스는 백엔드서만 돌아가니까.



function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

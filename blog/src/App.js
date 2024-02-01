import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //JSX
  // {}으로 데이터 바인딩을 쉽게 할 수 있다.
  // {}에 변수명, 함수등을 써주면 됨.

  //state : 웹이 앱처럼 동작하게 만들고 싶어서 state에 저장해놓는다.
  //        state는 변경되면 HTML이 자동으로 재랜더링된다. => 새로고침없이 화면이 변경된다.
  //        자주 바뀌는 중요 데이터는 변수말고 state로 저장해서 쓰는 게 좋다.
  let [title, titleUpdate] = useState(['블로그 제목1','블로그 제목2','블로그 제목 3','블로그 제목4']);
  return (
    <div className="App">
      <div className="black-nav">
        <div> React Blog :D </div>
      </div>
      <div className="list">
        <h3>{title[0]}</h3>
        <p>2024.01.29</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2024.01.29</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2024.01.29</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[3]}</h3>
        <p>2024.01.29</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

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

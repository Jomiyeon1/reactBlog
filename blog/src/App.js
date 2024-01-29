import logo from './logo.svg';
import './App.css';

function App() {
  // {}으로 데이터 바인딩을 쉽게 할 수 있다.
  // {}에 변수명, 함수등을 써주면 됨.
  let title = '글 제목';
  return (
    <div className="App">
      <div className="black-nav">
        <div> <img src={logo}/> React Blog :D </div>
      </div>
      <div className="list">
        <h3>{title}</h3>
        <p>2024.01.29</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

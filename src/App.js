import './App.css';
import logo from './logo.svg';
import React, { useState } from 'react';

function App() {
  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '아이스티 맛집']);
  let [따봉, 따봉변경] = useState(0);
  //따봉변경(따봉을 대체할 데이터)
  function 함수() {
    따봉변경(따봉 + 1);
  }

  function 제목변경함수() {
    
    var newArray = [...글제목];
    //state를 deep copy
    //원본 레퍼런스 주소를 공유하지 않고, 복사 할 수 있다.
    // newArray[0] = '여자 코트 추천';
    newArray.sort();
    글제목변경(newArray);

  }

  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목변경함수 }>버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ 함수 }>🤙🏿</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>  
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>  

    </div>
  );
}

export default App;

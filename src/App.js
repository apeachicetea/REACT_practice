import './App.css';
import logo from './logo.svg';
import React, { useState } from 'react';

function App() {
  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '아이스티 맛집']);
  let [따봉, 따봉변경] = useState(0);
  //따봉변경(따봉을 대체할 데이터)
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  function 모달변경함수() {
    modal변경(!modal);
  }
  
  function 함수() {
    따봉변경(따봉 + 1);
  }

  function 제목변경함수() {
    
    var newArray = [...글제목];
    //state를 deep copy
    //원본 레퍼런스 주소를 공유하지 않고, 복사 할 수 있다.
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);

  }

  
  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목변경함수 }>버튼</button>

      { 
      
        글제목.map(function(el, i) {
          return (
            <div className="list">
              <h3 onClick={ ()=>{ 누른제목변경(i) } }> { el } <span onClick={ 함수 }>🤙🏿</span> { 따봉 } </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      
      }
      <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button>

      <button onClick={ 모달변경함수 }>열고닫기</button>


      {
        modal === true
        ? <Modal 글제목 = { 글제목 } 누른제목 = { 누른제목 } />
        : null
        //텅빈 HTML이라는 뜻
      }

    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}


export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      {
        글제목.map(function (a, i) {
          return (<div className="list">
            <h4 onClick={() => {
              if (modal) {
                setModal(false);
              }
              else {
                setModal(true);
              }

              setTitle(i);
            }}>

              {글제목[i]} <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}> 👍 </span> {따봉[i]}

              <p onClick={(e) => {
                e.stopPropagation();
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</p>
            </h4>

            <p>2월 17일 발행</p>

          </div>)
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />

      <button onClick={() => {
        let copy = [...글제목];
        copy.push(입력값);
        글제목변경(copy)
      }}>작성</button>
      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null
      }
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <span onClick={() => {
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        props.글제목변경(copy)
      }}>글 수정 버튼</span>
    </div>

  )
}


export default App;

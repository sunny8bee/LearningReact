/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경함수] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); //UI의 상태를 보관 ex) useState(true);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "28px" }}>🌸Blog🌸</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글수정{" "}
      </button>
      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span
            style={{ fontSize: "25px" }}
            onClick={() => 따봉변경함수(따봉 + 1)}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            if (modal == false) {
              setModal(true);
            } else {
              setModal(false);
            }
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 19일 발행</p>
      </div> */}

      {/* (a)는 array */}
      {/* (i)는 반복문이 돌때마다 1씩증가 */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                if (modal == false) {
                  setModal(true);
                } else {
                  setModal(false);
                }
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경함수(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 18일 발행</p>
          </div>
        );
      })}

      {modal == true ? <Modal /> : null}
    </div>
  );
}
//컴포넌트 만드는 법
//1.function만들고 -> 2.return()안에 html담기 -> 3.<함수명></함수명>
//return 안에는 하나의 태그로 끝나야함
//메인 리턴에 <함수명></함수명> 활용 , </함수명>가능

//const , let으로 함수 만들기 가능
//const Modal = () => {} Modal = 123;
//const로 함수만드는 이유 : 에러메시지가 뜬다. 실수방지

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
// 컴포넌트 언제쓰면 좋은가 ?
//1.반복적인 html 축약할 때  2.큰페이지 전환할 떄 3.자주변경되는UI
//컴포넌트는 한 함수에서만 쓸 수있다. 굳이 많이 만들 필요는 없다.

export default App;

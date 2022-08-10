/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //let post = "강남역 돈가스 맛집"; //재렌더링이 안됨 손수수정해야함
  // let [코트, 코트함수] = useState("남자 코트 추천");
  // let [맛집, c] = useState("강남 우동 맛집");
  // let [독학, d] = useState("파이썬독학");

  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  // ['남자코트추천', 함수]남음
  //state는 바로 재렌더링적용됨.  자동렌더링
  //logo 같은건 바뀌지 않기때문에 state 넣을 필요없을듯.
  //자주 변경될것들은 -> state로 만들어넣어라

  let [따봉, 따봉변경함수] = useState(0);

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
          let copy = [...글제목]; //[...]괄호벗겨주세요.
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글수정{" "}
      </button>
      <div className="list">
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
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
      </div>
    </div>
  );
}

export default App;

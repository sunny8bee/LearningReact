/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState(["딸기", "사과", "바나나"]);
  let [title1, setTitle1] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    // 📌블로그 넥바만들기
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "28px" }}>🟡블로그🟡</h4>
      </div>

      {/*  📌가나다순 정렬버튼만들기 */}
      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        가나다순
      </button>
      {/* 📌글수정 버튼클릭시 첫번째 글제목 '과일장사꾼'으로 변환 */}
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "과일장사꾼";
          setTitle(copy);
        }}
      >
        글수정
      </button>

      {/* 📌모달창에 title과 같은 제목이 뜨도록 만들기 i활용! */}
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle1(i);
              }}
            >
              {title[i]}

              {/* 📌 조아요 넣기 */}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                💛
              </span>
              {like[i]}
            </h4>
            <p>2022년 08월 16일 발행</p>
          </div>
        );
      })}

      {/* 📌모달창 컴포넌트 만들기 */}
      {/* 삼항연산자 */}
      {modal == true ? <Modal title={title} title1={title1} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.title1]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;

/*eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  // let [글제목1, 글제목변경1] = useState([
  //   "남자 코트 추천",
  //   "강남 우동맛집",
  //   "파이썬 독학",
  // ]);
  let [title, setTitle] = useState(0);

  let [따봉, 따봉변경함수] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); //UI의 상태를 보관 ex) useState(true);
  let [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "28px" }}>🌸Blog🌸</h4>
      </div>
      {/* 📌가나다순 정렬 버튼만들기  */}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순
      </button>
      {/* 📌글수정버튼 클릭시 첫번째 글제목 '여자 코트 추천'으로 변경시키기 */}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        🖋글수정{" "}
      </button>
      {/* 📌글제목 클릭시 모달창 글제목 각각 변경되며 알맞게 뜨기 i활용! */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                //📌if문은 모달창 한번 누르면 나오게 두번누르면 없어지게
                // if (modal == false) {
                setModal(true);
                setTitle(i); //📌 state선언하고 i 활용
                // }
                // else {
                //   setModal(false);
                // }
              }}
            >
              {/* 📌글제목 옆에 👍따봉 클릭시 1증가되게하기           */}
              {글제목[i]}
              <span
                onClick={e => {
                  e.stopPropagation();
                  // 따봉클릭시 나타나는 모달창 안나오게하기

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
      <input
        onChange={e => {
          setInput(e.target.value);
          // 늦게처리됨(비동기처리)
          //다음줄 실행 먼저함
          // console.log(input);
        }}
      />
      &nbsp;
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(input);
          글제목변경(copy);
        }}
      >
        글발행
      </button>
      {/* 📌모달창 컴포넌트 만들기 */}
      {/* 📌컴포넌트에 title 추가 */}
      {modal == true ? (
        <Modal 글제목={글제목} title={title} color={"skyblue"} />
      ) : null}
    </div>
  );
}

// 📌컴포넌트에서 설정해놓은걸 props로 가져오기
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      {/* 삼항연산자 */}
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>

      {/* 📌모달창 안에 글수정버튼 누르면 제목변경 */}
      <button
        onClick={() => {
          props.글제목변경1([
            "여자 코트 추천",
            "강남 우동 맛집 추천",
            "파이썬 독학",
          ]);
        }}
      >
        글수정{" "}
      </button>
    </div>
  );
}
// 컴포넌트 언제쓰면 좋은가 ?
//1.반복적인 html 축약할 때  2.큰페이지 전환할 떄 3.자주변경되는UI
//컴포넌트는 한 함수에서만 쓸 수있다. 굳이 많이 만들 필요는 없다.

export default App;

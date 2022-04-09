import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
//import "antd/dist/antd.css";
function Home() {
  const history = useHistory();
  return (
    <div id="container">
      <div id="authLayout">
        <div id="nya">
          <div className="text">
            <p id="text_1">시작하기</p>
            <p id="text_2">
              멍냥식탁이 여러분의 반려동물 상태에 최적화된 자연식 정보를
              제공해드려요!
            </p>
            <p id="text_3">
              반려동물의 알레르기 검사지를 업로드 하고 맞춤형 상품 정보를
              받아보세요.
            </p>
          </div>
          <div id="btn">
            <button
              className="btn1"
              onClick={function () {
                history.push("/login");
              }}
            >
              로그인
            </button>
            <button
              className="btn2"
              onClick={function () {
                history.push("/signup");
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

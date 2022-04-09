import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Icon } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Radio } from "antd";
import "./petInfo.css";

function Complete() {
  const history = useHistory();

  return (
    <div id="container">
      <div id="signUpLayout">
        <div id="head">
          <p>ㅤ</p>
          <div>
            <p>회원가입 완료</p>
          </div>
          <p> </p>
        </div>

        <div id="body1">
          <div id="text">
            <p>
              안녕하세요. <br />
              당신의 반려동물의 영양을 책임질 <br />
              멍냥식탁입니다!
            </p>
          </div>
          <div id="btn">
            <button
              className="btn4"
              onClick={function () {
                history.push("/ocr");
              }}
            >
              알레르기 검사지 입력하기
            </button>
          </div>
          <button
            className="btn3"
            onClick={function () {
              history.push("/main");
            }}
          >
            메인으로 이동하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Complete;

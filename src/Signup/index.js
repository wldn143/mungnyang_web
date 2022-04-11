import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import { LeftOutlined } from "@ant-design/icons";

/* eslint-enable no-template-curly-in-string */
function Signup() {
  const history = useHistory();
  return (
    <div id="container">
      <div id="signUpLayout">
        <div id="head">
          <div className="back">
            <Button
              onClick={function () {
                history.push("/");
              }}
              icon={<LeftOutlined />}
            ></Button>
          </div>
          <div>
            <p>사용자 정보 입력</p>
          </div>
          <p> </p>
        </div>
        <div id="outline">
          <div id="formContainer">
            <form action="/signup2" method="get" id="signUpForm">
              <input
                className="form"
                type="text"
                name="이름"
                placeholder="이름"
                required
              ></input>
              <input
                className="form"
                type="email"
                name="이메일"
                placeholder="이메일"
                required
              ></input>
              <input
                className="form"
                type="text"
                name="전화번호"
                placeholder="전화번호"
                required
              ></input>
              <input
                className="form"
                type="password"
                name="비밀번호"
                placeholder="비밀번호"
                required
              ></input>

              <button className="btn" type="submit" form="signUpForm">
                다음
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import React from "react";
import "./index.css";

function Login() {
  return (
    <div id="container">
      <div id="authLayout">
        <div id="nya">
          <div className="text">
            <p id="text_1">시작하기</p>
          </div>
          <div id="loginform">
            <form>
              <div className="email">
                <input
                  type="text"
                  id="username"
                  name="username"
                  defaultValue="이메일"
                  className="text_input"
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  id="password"
                  name="password"
                  defaultValue="비밀번호"
                  className="text_input"
                />
              </div>
              <input className="submit" type="submit" value="로그인" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

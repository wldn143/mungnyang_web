import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Icon } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Radio } from "antd";
import AuthBox from "../components/auth/AuthBox";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import Footer from "../components/feed/Footer";
import WhiteButton from "../components/auth/WhiteButton";
import PinkButton from "../components/auth/PinkButton";
import Logo from "../image/landing_logo.png";
function SignUpComplete() {
  const history = useHistory();

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <div> ㅤ</div>
          <div>회원가입 완료</div>
          <div> </div>
        </Header>
        <div
          className="WhiteSpace"
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <AuthBox>
          <div>
            <img src={Logo} />
          </div>
          <div
            className="text"
            style={{
              marginTop: "10px",
              color: "#888888",
              width: "360px",
              height: "94px",
              textAlign: "center",
            }}
          >
            <p>
              안녕하세요.
              <br />
              당신의 반려동물의 영양을 책임질
              <br />
              멍냥식탁입니다!
            </p>
          </div>
        </AuthBox>
        <Footer>
          <PinkButton
            onClick={function () {
              history.push("/ocr");
            }}
          >
            알레르기 검사지 입력하기
          </PinkButton>
          <WhiteButton
            onClick={function () {
              history.push("./log-in");
            }}
          >
            메인으로 이동하기
          </WhiteButton>
        </Footer>
      </AuthLayout>
    </StartLayout>
  );
}

export default SignUpComplete;

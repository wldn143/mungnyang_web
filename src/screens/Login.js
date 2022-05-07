import styled from "styled-components";
import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import RoundBox from "../components/auth/RoundBox";
import PinkButton from "../components/auth/PinkButton";
import WhiteButton from "../components/auth/WhiteButton";
import StartText from "../components/auth/StartText";
import Input from "../components/auth/Input";
import SubmitButton from "../components/auth/SubmitButton";
import { useHistory } from "react-router-dom";
import axios from "axios";

const StartText1 = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin-top: -28px;
`;

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/user")
      .then((response) => response.json())
      .then((json) => {
        const foundData = json.users.find((data) => data.email === email);
        if (foundData.password === password) {
          //history.replace("/mainpage");
          sessionStorage.setItem("user", foundData.email);
        } else {
          alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        }
        document.location.href = "/log-in";
      });
  };

  return (
    <StartLayout>
      <RoundBox>
        <StartText>
          <StartText1>시작하기</StartText1>
        </StartText>
        <div className="form" style={{ width: "90%" }}>
          <form onSubmit={submitHandler}>
            <Input
              name="name"
              type="text"
              placeholder="이메일"
              onChange={emailHandler}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={passwordHandler}
              required
            />
            <SubmitButton type="submit">로그인</SubmitButton>
          </form>
        </div>
      </RoundBox>
    </StartLayout>
  );
}
export default Login;

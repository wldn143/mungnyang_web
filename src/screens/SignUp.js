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
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import Footer from "../components/feed/Footer";
import BackButton from "../components/feed/BackButton";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("입력한 비밀번호와 일치하지 않습니다.");
    }
  };

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>사용자 정보 입력</div>
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
          <form action="/sign-up2" method="get">
            <Input
              name="name"
              type="text"
              placeholder="이름"
              value={name}
              onChange={onNameHandler}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={onEmailHandler}
              required
            />
            <Input type="text" placeholder="전화번호" />
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={onPasswordHandler}
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
              required
            />
            <div
              id="WhiteSpace"
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "30px",
              }}
            ></div>
            <SubmitButton type="submit" onSubmit={onSubmit}>
              다음
            </SubmitButton>
          </form>
        </AuthBox>
      </AuthLayout>
    </StartLayout>
  );
}
export default SignUp;

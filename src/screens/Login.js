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

const StartText1 = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin-top: -28px;
`;

function Login() {
  const history = useHistory();

  return (
    <StartLayout>
      <RoundBox>
        <StartText>
          <StartText1>시작하기</StartText1>
        </StartText>
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <SubmitButton type="submit" value="로그인"></SubmitButton>
      </RoundBox>
    </StartLayout>
  );
}
export default Login;

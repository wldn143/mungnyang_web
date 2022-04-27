import styled from "styled-components";
import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import BackButton from "../components/feed/BackButton";
import AuthBox from "../components/auth/AuthBox";

function OcrHw() {
  const history = useHistory();
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>알레르기 정보 수기 입력</div>
          <div> </div>
        </Header>
        <AuthBox></AuthBox>
      </AuthLayout>
    </StartLayout>
  );
}
export default OcrHw;

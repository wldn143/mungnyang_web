import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Radio } from "antd";
import AuthBox from "../components/auth/AuthBox";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import PinkButton from "../components/auth/PinkButton";
import comp from "../components/auth/comp";
import axios from "axios";
import styled from "styled-components";
import OcrDatagraph from "../components/ocr/OcrDatagraph";

function OcrResult() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const history = useHistory();

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <div> ㅤ</div>
          <div>인식 결과 확인</div>
          <div> </div>
        </Header>
        <div style={{ height: "80px", width: "85%" }}>
          반려동물 알레르기 검사지 인식 결과를
          <br /> 확인해주세요.
        </div>
        <OcrDatagraph />
        <PinkButton
          onClick={function () {
            history.push("./log-in");
          }}
        >
          맞춤 레시피 구경하러가기
        </PinkButton>
      </AuthLayout>
    </StartLayout>
  );
}

export default OcrResult;

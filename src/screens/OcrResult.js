import React from "react";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import PinkButton from "../components/auth/PinkButton";
import OcrDatagraph from "../components/ocr/OcrDatagraph";

function OcrResult() {
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

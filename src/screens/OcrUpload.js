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
import MeatOcrImg from "../image/meatOcr.png";
import FruitsOcrImg from "../image/fruitsOcr.png";
import FishOcrImg from "../image/fishOcr.png";
import VegeOcrImg from "../image/vegeOcr.png";

import OcrContainer from "../components/auth/OcrContainer";
function OcrUpload() {
  const [fileImage, setFileImage] = useState("");
  const [fileImage2, setFileImage2] = useState("");
  const [fileImage3, setFileImage3] = useState("");
  const [fileImage4, setFileImage4] = useState("");

  const [meatOcrImg, setMeatOcrImg] = useState(false);
  const [fruitsOcrImg, setFruitsOcrImg] = useState(false);
  const [fishOcrImg, setFishOcrImg] = useState(false);
  const [vegeOcrImg, setVegeOcrImg] = useState(false);

  // 파일 저장
  const formData = new FormData();
  const saveMeatOcr = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    for (const keyValue of formData) console.log(keyValue);
    setMeatOcrImg(true);
  };
  const saveFruitOcr = (e) => {
    setFileImage2(URL.createObjectURL(e.target.files[0]));
    //const img = e.target.files[0];
    for (const keyValue of formData) console.log(keyValue);
    setFruitsOcrImg(true);
  };

  const saveFishOcr = (e) => {
    setFileImage3(URL.createObjectURL(e.target.files[0]));
    //const img = e.target.files[0];
    for (const keyValue of formData) console.log(keyValue);
    setFishOcrImg(true);
  };

  const saveVegeOcr = (e) => {
    setFileImage4(URL.createObjectURL(e.target.files[0]));
    //const img = e.target.files[0];
    for (const keyValue of formData) console.log(keyValue);
    setVegeOcrImg(true);
  };

  const UploadedMeatImg = () => (
    <div>
      <img
        id="meat_img"
        alt="sample"
        src={fileImage}
        style={{ margin: "auto" }}
        width="163"
        height="197"
      />
    </div>
  );
  const UploadedFruitsImg = () => (
    <div>
      <img
        id="fruits_img"
        alt="sample"
        src={fileImage2}
        style={{ margin: "auto" }}
        width="163"
        height="197"
      />
    </div>
  );
  const UploadedFishImg = () => (
    <div>
      <img
        id="fish_img"
        alt="sample"
        src={fileImage3}
        style={{ margin: "auto" }}
        width="163"
        height="197"
      />
    </div>
  );
  const UploadedVegeImg = () => (
    <div>
      <img
        id="vege_img"
        alt="sample"
        src={fileImage4}
        style={{ margin: "auto" }}
        width="163"
        height="197"
      />
    </div>
  );

  const DefaultMeatImg = () => (
    <div>
      <img id="meat_img" src={MeatOcrImg} />
    </div>
  );
  const DefaultFruitsImg = () => (
    <div>
      <img id="fruits_img" src={FruitsOcrImg} />
    </div>
  );
  const DefaultFishImg = () => (
    <div>
      <img id="fish_img" src={FishOcrImg} />
    </div>
  );
  const DefaultVegeImg = () => (
    <div>
      <img id="vege_img" src={VegeOcrImg} />
    </div>
  );

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>알레르기 검사 OCR</div>
          <div> </div>
        </Header>
        <div
          className="TextSpace"
          style={{
            width: "90%",
            height: "100px",
            marginTop: "10px",
          }}
        >
          <p>
            반려동물의 알레르기 검사 결과를 정해진 규격에
            <br />
            따라 업로드 해주세요.
          </p>
        </div>
        <AuthBox>
          <OcrContainer>
            <div id="ocr_input1">
              <label className="input-file-button" htmlFor="input-file">
                {meatOcrImg ? <UploadedMeatImg /> : <DefaultMeatImg />}
              </label>
              <input
                id="input-file"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveMeatOcr}
                style={{ display: "none" }}
              />
            </div>
            <div id="ocr_input2">
              <label className="input-file-button" htmlFor="input-file2">
                {fruitsOcrImg ? <UploadedFruitsImg /> : <DefaultFruitsImg />}
              </label>
              <input
                id="input-file2"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveFruitOcr}
                style={{ display: "none" }}
              />
            </div>
          </OcrContainer>
          <div
            className="WhiteSpace"
            style={{
              height: "25px",
            }}
          ></div>
          <OcrContainer>
            <div id="ocr_input3">
              <label className="input-file-button" htmlFor="input-file3">
                {fishOcrImg ? <UploadedFishImg /> : <DefaultFishImg />}
              </label>
              <input
                id="input-file3"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveFishOcr}
                style={{ display: "none" }}
              />
            </div>
            <div id="ocr_input4">
              <label className="input-file-button" htmlFor="input-file4">
                {vegeOcrImg ? <UploadedVegeImg /> : <DefaultVegeImg />}
              </label>
              <input
                id="input-file4"
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={saveVegeOcr}
                style={{ display: "none" }}
              />
            </div>
          </OcrContainer>
        </AuthBox>
        <div
          className="WhiteSpace"
          style={{
            height: "25px",
          }}
        ></div>
        <SubmitButton>결과 확인하기</SubmitButton>
      </AuthLayout>
    </StartLayout>
  );
}
export default OcrUpload;

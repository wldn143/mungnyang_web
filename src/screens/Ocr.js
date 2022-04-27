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
import BackButton from "../components/feed/BackButton";
import OcrIntro1 from "../image/OCR_intro1.png";
import OcrIntro2 from "../image/OCR_intro2.png";
import OcrIntro3 from "../image/OCR_intro3.png";
import OcrUploadPageButton from "../image/OCR_test_btn.png";
import OcrHWButton from "../image/OCR_hw_btn.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./index.css";

function Ocr() {
  const history = useHistory();
  let photo = 1;
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>알레르기 검사 OCR</div>
          <div> </div>
        </Header>
        <div className="slider">
          <div className="slide">
            <div className="slide-container">
              <div className="slide-box">
                <img src={OcrIntro1} alt="" />
              </div>
              <div className="slide-box">
                <img src={OcrIntro2} alt="" />
              </div>
              <div className="slide-box">
                <img src={OcrIntro3} alt="" />
              </div>
            </div>
            <div className="slide-next">
              <Button
                onClick={function () {
                  const slideContainer =
                    document.querySelector(".slide-container");
                  if (photo < 3) {
                    slideContainer.style.transform = `translateX(-${photo}00vw)`;
                    photo += 1;
                  } else {
                    slideContainer.style.transform = `translateX(0)`;
                    photo = 1;
                  }
                }}
                icon={<RightOutlined />}
              ></Button>
            </div>
            <div className="slide-prev">
              <Button
                onClick={function () {
                  const slideContainer =
                    document.querySelector(".slide-container");
                  if (photo > 1) {
                    slideContainer.style.transform = `translateX(-${
                      photo - 2
                    }00vw)`;
                    photo -= 1;
                  } else {
                    slideContainer.style.transform = `translateX(-200vw)`;
                    photo = 3;
                  }
                }}
                icon={<LeftOutlined />}
              ></Button>
            </div>
          </div>
        </div>

        <div id="allergy_input">
          <button
            id="allergy_input_upload"
            onClick={function () {
              history.push("/ocr-upload");
            }}
          >
            <img src={OcrUploadPageButton} alt="" />
          </button>
          <button
            id="allergy_input_write"
            onClick={function () {
              history.push("/ocr-handwrite");
            }}
          >
            <img src={OcrHWButton} alt="" />
          </button>
        </div>
      </AuthLayout>
    </StartLayout>
  );
}

export default Ocr;

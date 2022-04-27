import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Allergy1 from "./ocr_img/allergy.png";
import Allergy2 from "./ocr_img/allergy2.png";
import Allergy3 from "./ocr_img/allergy3.png";
import Allergy_upload from "./ocr_img/1.png";
import Allergy_write from "./ocr_img/2.png";

import React from "react";

function Ocr() {
  const history = useHistory();
  let photo = 1;
  return (
    <div id="container">
      <div id="signUpLayout">
        <div id="head">
          <div className="back">
            <Button
              onClick={function () {
                history.push("/complete");
              }}
              icon={<LeftOutlined />}
            ></Button>
          </div>
          <div>
            <p>알레르기 정보 입력</p>
          </div>
          <p> </p>
        </div>
        <div className="slider">
          <div className="slide">
            <div className="slide-container">
              <div className="slide-box">
                <img src={Allergy1} alt="" />
              </div>
              <div className="slide-box">
                <img src={Allergy2} alt="" />
              </div>
              <div className="slide-box">
                <img src={Allergy3} alt="" />
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
              history.push("/ocr_upload");
            }}
          >
            <img src={Allergy_upload} alt="" />
          </button>
          <button
            id="allergy_input_write"
            onClick={function () {
              history.push("/complete");
            }}
          >
            <img src={Allergy_write} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Ocr;

import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Icon } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Radio } from "antd";
import "./petInfo.css";

import { LeftOutlined } from "@ant-design/icons";

function Signup2() {
  const history = useHistory();

  // 선택된 목록 가져오기
  function getCheckboxValue() {
    // 선택된 목록에서 value 찾기
    let animal = "";
    document.querySelectorAll('input[name="animal"]:checked').forEach((el) => {
      animal = el.value;
    });

    let neut = "";
    document.querySelectorAll('input[name="neut"]:checked').forEach((el) => {
      neut = el.value;
    });
    let gender = "";
    document.querySelectorAll('input[name="gender"]:checked').forEach((el) => {
      gender = el.value;
    });
  }

  return (
    <div id="container">
      <div id="signUpLayout">
        <div id="head">
          <div className="back">
            <Button
              onClick={function () {
                history.push("/signup");
              }}
              icon={<LeftOutlined />}
            ></Button>
          </div>

          <div>
            <p>반려동물 정보 입력</p>
          </div>
          <p> </p>
        </div>

        <div id="outline">
          <div id="authLayout">
            <div id="formContainer2">
              <form
                action="http://localhost:3000/signup3"
                method="get"
                id="signUpForm2"
              >
                <div className="select">
                  <input type="radio" id="animal1" name="animal" value="dog" />
                  <label for="animal1">강아지</label>
                  <input type="radio" id="animal2" name="animal" value="cat" />
                  <label for="animal2">고양이</label>
                </div>
                <input
                  className="form"
                  type="text"
                  name="pet_name"
                  placeholder="이름"
                  required
                ></input>
                <input
                  className="form"
                  type="number"
                  name="age"
                  placeholder="나이"
                  required
                ></input>
                <p>성별</p>
                <div className="select">
                  <input type="radio" id="gender1" name="gender" value="male" />
                  <label for="gender1">남</label>
                  <input
                    type="radio"
                    id="gender2"
                    name="gender"
                    value="female"
                  />
                  <label for="gender2">여</label>
                </div>
                <p>중성화 유무</p>
                <div className="select">
                  <input type="radio" id="neut1" name="neut" value="yes" />
                  <label for="neut1">YES</label>
                  <input type="radio" id="neut2" name="neut" value="no" />
                  <label for="neut2">NO</label>
                </div>
                <input
                  className="form"
                  type="number"
                  name="weight"
                  placeholder="체중"
                  required
                ></input>
                <button
                  className="btn"
                  type="submit"
                  onClick={() => getCheckboxValue()}
                  form="signUpForm2"
                >
                  다음
                </button>
                <div id="result"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup2;

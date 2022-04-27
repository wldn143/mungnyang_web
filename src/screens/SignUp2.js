import styled from "styled-components";
import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import RoundBoxL from "../components/auth/RoundBoxL";
import PinkButton from "../components/auth/PinkButton";
import WhiteButton from "../components/auth/WhiteButton";
import StartText from "../components/auth/StartText";
import Input from "../components/auth/Input";
import SubmitButton from "../components/auth/SubmitButton";
import { useHistory } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import Radio from "../components/auth/Radio";
import DogUnclick from "../image/dog_unclick.png";
import BackButton from "../components/feed/BackButton";
function SignUp2() {
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
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>반려동물 정보 입력</div>
          <div> </div>
        </Header>
        <div
          className="WhiteSpace"
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <RoundBoxL>
          <AuthBox>
            <form action="/sign-up3" method="get">
              <div
                className="select"
                style={{
                  marginBottom: "23px",
                }}
              >
                <Radio id="animal1" name="animal" value="dog" />
                <label htmlFor="animal1">강아지</label>
                <Radio type="radio" id="animal2" name="animal" value="cat" />
                <label htmlFor="animal2">고양이</label>
              </div>
              <Input
                className="form"
                type="text"
                name="pet_name"
                placeholder="이름"
                required
              />
              <Input
                className="form"
                type="number"
                name="age"
                placeholder="나이"
                required
              />

              <p>성별</p>
              <div
                className="select"
                style={{
                  marginBottom: "23px",
                }}
              >
                <Radio id="gender1" name="gender" value="male" />
                <label htmlFor="gender1">남</label>
                <Radio id="gender2" name="gender" value="female" />
                <label htmlFor="gender2">여</label>
              </div>
              <p>중성화 유무</p>
              <div
                className="select"
                style={{
                  marginBottom: "23px",
                }}
              >
                <Radio id="neut1" name="neut" value="yes" />
                <label htmlFor="neut1">YES</label>
                <Radio id="neut2" name="neut" value="no" />
                <label htmlFor="neut2">NO</label>
              </div>
              <Input
                className="form"
                type="number"
                name="weight"
                placeholder="체중"
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
              <SubmitButton type="submit" onClick={() => getCheckboxValue()}>
                다음
              </SubmitButton>
            </form>
          </AuthBox>
        </RoundBoxL>
      </AuthLayout>
    </StartLayout>
  );
}
export default SignUp2;

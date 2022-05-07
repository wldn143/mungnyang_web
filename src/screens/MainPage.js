import styled from "styled-components";
import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import WhiteButton from "../components/auth/WhiteButton";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import Radio from "../components/auth/Radio";
import CheckBox from "../components/auth/CheckBox";
import RoundBox from "../components/auth/RoundBox";

function MainPage(props) {
  const isLogin = props.isLogin;

  console.log(sessionStorage.getItem("user"));

  const onLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    sessionStorage.removeItem("user");
    // App 으로 이동(새로고침)
    document.location.href = "/log-in";
  };

  return (
    <StartLayout>
      <AuthLayout>
        {/* <RoundBox> */}
        <div>
          <WhiteButton type="button" onClick={onLogout}>
            Logout
          </WhiteButton>
        </div>
        <AuthBox>
          <div
            className="mainpage"
            style={{
              fontSize: "30px",
            }}
          >
            Main Page
          </div>
        </AuthBox>
        {/* </RoundBox> */}
      </AuthLayout>
    </StartLayout>
  );
}
export default MainPage;

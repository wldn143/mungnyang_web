import styled from "styled-components";
import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import AuthLayout from "../components/auth/AuthLayout";
import AuthBox from "../components/auth/AuthBox";
import RoundBoxL from "../components/auth/RoundBoxL";
import { useHistory } from "react-router-dom";
import RecipeList from "../components/recipe/RecipeList";

const CategoryBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid #ed7567;
  border-radius: 25px;
  cursor: pointer;
`;
function MainPage(props) {
  sessionStorage.setItem("pet_id", 14);
  const history = useHistory();
  const isLogin = props.isLogin;
  console.log(isLogin);
  console.log(sessionStorage.getItem("user"));

  const onLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    sessionStorage.removeItem("user");
    // App 으로 이동(새로고침)
    document.location.href = "/log-in";
  };
  const clickMyPage = (e) => {
    e.preventDefault();
    document.location.href = "/petpage";
  };
  return (
    <StartLayout>
      <AuthLayout>
        {/* <RoundBox> */}
        {/* <div>
          <WhiteButton type='button' onClick={onLogout}>
            Logout
          </WhiteButton>
        </div> */}
        <div
          style={{
            width: "85%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#ED7567",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              멍냥식탁
            </div>
            <button
              style={{
                cursor: "pointer",
                width: "40px",
                border: "1px solid gray",
                borderRadius: "10px",
              }}
              onClick={clickMyPage}
            >
              MY
            </button>
          </div>
          <div>반려동물 맞춤 자연식 레시피 찾아보기</div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <CategoryBtn>조리식</CategoryBtn>
            <CategoryBtn>퓨레</CategoryBtn>
            <CategoryBtn>간식</CategoryBtn>
            <CategoryBtn>생식</CategoryBtn>
          </div> */}
        </div>
        {/* <RoundBoxL> */}
        <div>
          <RecipeList></RecipeList>
        </div>
        {/* </RoundBoxL> */}
      </AuthLayout>
    </StartLayout>
  );
}
export default MainPage;

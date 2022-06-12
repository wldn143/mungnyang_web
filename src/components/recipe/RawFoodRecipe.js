import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../auth/AuthLayout";
import StartLayout from "../auth/StartLayout";
import BackButton from "../feed/BackButton";
import Header from "../feed/Header";
import RecipeImg from "../../image/recipeImg.png";
import axios from "axios";
const Minibutn = styled.button`
  width: 230px;
  height: 40px;
  border-radius: 25px;
  cursor: pointer;

  background-color: #ed7567;
  color: white;

  border-radius: 7px;
  cursor: pointer;
`;

function RawFoodRecipe() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>생식 정보 상세 보기</div>
          <div> </div>
        </Header>
        <div id='body' style={{ width: "85%", height: "600px" }}>
          <div id='amount'>
            <div
              style={{
                height: "70px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#ed7567",
                fontSize: "18px",
              }}
            >
              재료별 분배량
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                id='meatContainer'
                style={{
                  width: "310px",
                  height: "160px",
                  border: "#ED7567 0.5px solid",
                  borderRadius: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "30px",
                    color: "#ed7567",
                    fontWeight: "bold",
                  }}
                >
                  <div>고기류</div>
                </div>

                <div
                  style={{
                    width: "95%",
                    height: "110px",
                  }}
                ></div>
              </div>
              <div
                id='else'
                style={{
                  width: "310px",
                  height: "160px",
                  border: "#ED7567 0.5px solid",
                  borderRadius: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "30px",
                    color: "#ed7567",
                    fontWeight: "bold",
                  }}
                >
                  <div>채소 & 기타</div>
                </div>
                <div
                  style={{
                    width: "95%",
                    height: "110px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div id='info'>
            <div
              style={{
                height: "70px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#ed7567",
                fontSize: "18px",
              }}
            >
              주 영양성분 정보
            </div>
            <div>
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ color: "#ed7567", fontWeight: "bold" }}>
                  총 섭취량
                </div>
                <div>data</div>
              </div>
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ color: "#ed7567", fontWeight: "bold" }}>
                  총 칼로리
                </div>
                <div>data</div>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </StartLayout>
  );
}
export default RawFoodRecipe;

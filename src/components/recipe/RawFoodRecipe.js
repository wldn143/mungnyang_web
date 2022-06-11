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
      </AuthLayout>
    </StartLayout>
  );
}
export default RawFoodRecipe;

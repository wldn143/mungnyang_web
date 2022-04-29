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
import CheckBox from "../components/auth/CheckBox";
import RoundBox from "../components/auth/RoundBox";

function MainPage() {
  return (
    <StartLayout>
      <AuthLayout>
        <RoundBox>
          <AuthBox></AuthBox>
        </RoundBox>
      </AuthLayout>
    </StartLayout>
  );
}
export default MainPage;

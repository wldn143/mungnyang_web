import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Select, Radio } from "antd";
import AuthBox from "../components/auth/AuthBox";
import AuthLayout from "../components/auth/AuthLayout";
import StartLayout from "../components/auth/StartLayout";
import Header from "../components/feed/Header";
import PinkButton from "../components/auth/PinkButton";
import comp from "../components/auth/comp";
import axios from "axios";
import MeatContainer from "../components/ocr/MeatContainer";
import SeafoodContainer from "../components/ocr/SeafoodContainer";
import FruitsContainer from "../components/ocr/FruitsContainer";
import VegeContainer from "../components/ocr/VegeContainer";
import NutsContainer from "../components/ocr/NutsContainer";
import styled from "styled-components";

const OcrNavBtn = styled.button`
  //width: 50px;
  height: 35px;
  color: #ed7567;
  font-size: 15px;
  margin: 0px 15px 0px 5px;
  font-weight: bolder;
  cursor: pointer;
`;

function OcrResult() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  let index;
  fetch("http://localhost:8080/OCR_result_meat")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.OCR_result_meat.length; i++) {
        if (json.OCR_result_meat[i].pet_id === petId) {
          index = i;
          break;
        }
      }
      sessionStorage.setItem("duck", json.OCR_result_meat[index].duck);
      sessionStorage.setItem("lamb", json.OCR_result_meat[index].lamb);
      sessionStorage.setItem("beef", json.OCR_result_meat[index].beef);
      sessionStorage.setItem("chicken", json.OCR_result_meat[index].chicken);
      sessionStorage.setItem("turckey", json.OCR_result_meat[index].turckey);
      sessionStorage.setItem("pork", json.OCR_result_meat[index].pork);
    })
    .catch(() => {
      console.log("petId 또는 OCR업로드가 저장되지않음");
    });

  fetch("http://localhost:8080/OCR_result_seafood")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.OCR_result_seafood.length; i++) {
        if (json.OCR_result_seafood[i].pet_id === petId) {
          index = i;
          break;
        }
      }
      sessionStorage.setItem("crab", json.OCR_result_seafood[index].crab);
      sessionStorage.setItem("shrimp", json.OCR_result_seafood[index].shrimp);
      sessionStorage.setItem(
        "mackerel",
        json.OCR_result_seafood[index].mackerel
      );
      sessionStorage.setItem("sardine", json.OCR_result_seafood[index].sardine);
      sessionStorage.setItem("anchovy", json.OCR_result_seafood[index].anchovy);
      sessionStorage.setItem("cod", json.OCR_result_seafood[index].cod);
      sessionStorage.setItem("salmon", json.OCR_result_seafood[index].salmon);
      sessionStorage.setItem("tuna", json.OCR_result_seafood[index].tuna);
    })
    .catch(() => {
      console.log("petId 또는 OCR업로드가 저장되지않음");
    });

  fetch("http://localhost:8080/OCR_result_fruit")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.OCR_result_fruit.length; i++) {
        if (json.OCR_result_fruit[i].pet_id === petId) {
          index = i;
          break;
        }
      }
      sessionStorage.setItem("w_melon", json.OCR_result_fruit[index].w_melon);
      sessionStorage.setItem("melon", json.OCR_result_fruit[index].melon);
      sessionStorage.setItem("pear", json.OCR_result_fruit[index].pear);
      sessionStorage.setItem(
        "mandarine",
        json.OCR_result_fruit[index].mandarine
      );
      sessionStorage.setItem("orange", json.OCR_result_fruit[index].orange);
      sessionStorage.setItem("apple", json.OCR_result_fruit[index].apple);
      sessionStorage.setItem("banana", json.OCR_result_fruit[index].banana);
      sessionStorage.setItem("guava", json.OCR_result_fruit[index].guava);
    })
    .catch(() => {
      console.log("petId 또는 OCR업로드가 저장되지않음");
    });

  fetch("http://localhost:8080/OCR_result_vege")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.OCR_result_vege.length; i++) {
        if (json.OCR_result_vege[i].pet_id === petId) {
          index = i;
          break;
        }
      }
      sessionStorage.setItem("carrot", json.OCR_result_vege[index].carrot);
      sessionStorage.setItem("corn", json.OCR_result_vege[index].potato);
      sessionStorage.setItem("potato", json.OCR_result_vege[index].potato);
      sessionStorage.setItem("s_potato", json.OCR_result_vege[index].s_potato);
      sessionStorage.setItem("pumpkin", json.OCR_result_vege[index].pumpkin);
      sessionStorage.setItem("broccoli", json.OCR_result_vege[index].broccoli);
      sessionStorage.setItem("cabbage", json.OCR_result_vege[index].cabbage);
      sessionStorage.setItem("pea", json.OCR_result_vege[index].pea);
      sessionStorage.setItem("tomato", json.OCR_result_vege[index].tomato);
      sessionStorage.setItem("seaweed", json.OCR_result_vege[index].seaweed);
    })
    .catch(() => {
      console.log("petId 또는 OCR업로드가 저장되지않음");
    });
  fetch("http://localhost:8080/OCR_result_nuts")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.OCR_result_nuts.length; i++) {
        if (json.OCR_result_nuts[i].pet_id === petId) {
          index = i;
          break;
        }
      }
      sessionStorage.setItem("bean", json.OCR_result_nuts[index].bean);
      sessionStorage.setItem("peanut", json.OCR_result_nuts[index].peanut);
      sessionStorage.setItem("rice", json.OCR_result_nuts[index].rice);
      sessionStorage.setItem("flour", json.OCR_result_nuts[index].flour);
    })
    .catch(() => {
      console.log("petId 또는 OCR업로드가 저장되지않음");
    });

  const [content, setContent] = useState();

  const buttonValueSetting = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setContent(name);
    if (name === "육류") {
      document.getElementById("육류").style.color = "#ed7567";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "해산물") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "#ed7567";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "과일") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "#ed7567";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "야채") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "#ed7567";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "견과류") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "#ed7567";
    }
  };
  const selectComponent = {
    육류: <MeatContainer />,
    해산물: <SeafoodContainer />,
    과일: <FruitsContainer />,
    야채: <VegeContainer />,
    견과류: <NutsContainer />,
  };
  const history = useHistory();

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <div> ㅤ</div>
          <div>인식 결과 확인</div>
          <div> </div>
        </Header>
        <div style={{ height: "80px", width: "85%" }}>
          반려동물 알레르기 검사지 인식 결과를
          <br /> 확인해주세요.
        </div>
        <div>
          <div
            style={{
              width: "330px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              borderColor: "#E0E0E0",
              borderWidth: "2px",
              borderStyle: "none none solid none",
            }}
          >
            {comp.map((data) => {
              return (
                <OcrNavBtn
                  onClick={buttonValueSetting}
                  name={data}
                  id={data}
                  key={data}
                >
                  {data}
                </OcrNavBtn>
              );
            })}
          </div>
          {content ? (
            <div>{selectComponent[content]}</div>
          ) : (
            <div style={{ width: "90%", height: "425px" }}></div>
          )}
        </div>

        <PinkButton
          onClick={function () {
            history.push("./log-in");
          }}
        >
          맞춤 레시피 구경하러가기
        </PinkButton>
      </AuthLayout>
    </StartLayout>
  );
}

export default OcrResult;

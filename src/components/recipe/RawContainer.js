import { useEffect, useState } from "react";
import styled from "styled-components";
import WhiteButton from "../auth/WhiteButton";
import PinkButton from "../auth/PinkButton";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
const SelectedContainer = styled.div`
  color: #ed7567;
  font-weight: bold;
  height: 75px;
`;
function RawContainer() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const location = useLocation();
  const history = useHistory();
  const [selectedIngredient, setSelectedIngredient] = useState([]);
  const [meatIngredient, setMeatIngredient] = useState([]);
  const [vegeIngredient, setVegeIngredient] = useState([]);
  const [fruitsIngredient, setFruitsIngredient] = useState([]);
  const [elseIngredient, setElseIngredient] = useState([]);
  const [indexNOArr, setIndexNOArr] = useState([]);
  useEffect(() => {
    var arr = [];
    if (location.state !== undefined) {
      setSelectedIngredient(location.state.data);
    }
    selectedIngredient.filter((item) => {
      arr.push(item.indexNO);
    });
    setIndexNOArr(arr);
  });
  useEffect(() => {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    //setSelectedIngredient(location.state.data);
    selectedIngredient.filter((item) => {
      if (item.group === "육류") {
        arr1.push(item.name);
      } else if (item.group === "채소류") {
        arr2.push(item.name);
      } else if (item.group === "과일류") {
        arr3.push(item.name);
      } else {
        arr4.push(item.name);
      }
    });
    setMeatIngredient(arr1);
    setVegeIngredient(arr2);
    setFruitsIngredient(arr3);
    setElseIngredient(arr4);
  }, [selectedIngredient]);

  useEffect(() => {
    if (location.state !== undefined) {
      setSelectedIngredient(location.state.data);
    }
    selectedIngredient.filter((item) => {
      if (item.group === "육류") {
        const meatBtn = document.getElementById("meat");
        const btn = document.createElement("button");
        btn.innerHTML = item.name;
        btn.id = "foodBtn";
        if (meatBtn.childElementCount <= setMeatIngredient.length + 1) {
          meatBtn.appendChild(btn);
        }
      } else if (item.group === "채소류") {
        const vegeBtn = document.getElementById("vege");
        const btn = document.createElement("button");
        btn.innerHTML = item.name;
        btn.id = "vege";
        if (vegeBtn.childElementCount <= setVegeIngredient.length + 1) {
          vegeBtn.appendChild(btn);
        }
      } else if (item.group === "과일류") {
        const fruitsBtn = document.getElementById("fruits");
        const btn = document.createElement("button");
        btn.innerHTML = item.name;
        btn.id = "foodBtn";
        if (fruitsBtn.childElementCount <= setFruitsIngredient.length + 1) {
          fruitsBtn.appendChild(btn);
        }
      } else {
        const elseBtn = document.getElementById("else");
        const btn = document.createElement("button");
        btn.innerHTML = item.name;
        btn.id = "foodBtn";
        if (elseBtn.childElementCount <= setElseIngredient.length + 1) {
          elseBtn.appendChild(btn);
        }
      }
    });
  }, [selectedIngredient]);

  function submitRaw() {
    let body = {
      pet_id: petId,
      indexNOArr: indexNOArr,
    };
    axios.post("http://localhost:8080/rawFood", body);
    history.push("/rawFoodRecipe");
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <div style={{ height: "30px" }}>재료선택</div>

        <div style={{ fontSize: "12px" }}>
          선택한 재료를 바탕으로 하루 권장 섭취 영양 성분
          <br />
          적합도를 계산합니다.
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "297px",
          marginTop: "15px",
        }}
      >
        <SelectedContainer>
          육류<div id='meat'></div>
        </SelectedContainer>
        <SelectedContainer>
          채소<div id='vege'></div>
        </SelectedContainer>
        <SelectedContainer>
          과일<div id='fruits'></div>
        </SelectedContainer>
        <SelectedContainer>
          기타<div id='else'></div>
        </SelectedContainer>
      </div>
      <div style={{ width: "339px" }}>
        <WhiteButton
          onClick={function () {
            history.push({
              pathname: "/select-raw",
              state: {
                data: selectedIngredient,
              },
            });
          }}
        >
          재료 추가하기
        </WhiteButton>
        {/* <WhiteButton>초기화</WhiteButton> */}
        <PinkButton onClick={submitRaw}>결과보기</PinkButton>
      </div>
    </div>
  );
}
export default RawContainer;

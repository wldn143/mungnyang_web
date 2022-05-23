import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../screens/btn.css";
const InfoBox = styled.div`
  width: 120px;
  margin: 0 0 10px 0;
  font-family: Noto Sans;
`;
function PetInfo() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [petInfo, setPetInfo] = useState([]);
  const [petName, setPetName] = useState("");
  const [petSex, setpetSex] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petNeuter, setPetNeuter] = useState("");

  const [allergyId, setAllergyId] = useState([]);
  const [foods, setfoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/food")
      .then((response) => response.json())
      .then((data) => {
        setfoods(data.foods);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/allergyfood")
      .then((response) => response.json())
      .then((data) => {
        setAllergyId(data.allergy_food);
      });
  }, []);

  useEffect(() => {
    if (allergyId.filter((item) => item.pet_id === petId).length) {
      let allergyStr = allergyId.filter((item) => item.pet_id === petId)[0]
        .allergy_food_id;
      let allergyList = allergyStr.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      for (let i = 0; i < allergyList.length; i++) {
        if (foods.filter((item) => item.id === allergyList[i])) {
          let allergyfood = foods.filter(
            (item) => item.id === allergyList[i]
          )[0].foodInKor;
          const allergyFoodBtn = document.getElementById("allergyFoodBtn");
          const btn = document.createElement("button");
          btn.innerHTML = allergyfood;
          btn.id = "allergyfoodbtn";
          if (allergyFoodBtn.childElementCount < allergyList.length) {
            allergyFoodBtn.appendChild(btn);
          }
        }
      }
    }
  });

  useEffect(() => {
    fetch("http://localhost:8080/pet")
      .then((response) => response.json())
      .then((data) => {
        setPetInfo(data.pets);
      });
  }, []);

  useEffect(() => {
    if (petInfo.filter((item) => item.pet_id === petId).length) {
      let pet = petInfo.filter((item) => item.pet_id === petId);
      setPetName(pet[0].pet_name);
      setpetSex(pet[0].pet_sex);
      setPetAge(pet[0].pet_age);
      setPetWeight(pet[0].pet_weight);
      setPetNeuter(pet[0].pet_neuter);
    }
  });

  return (
    <div
      style={{
        height: "270px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          height: "60px",
        }}
      >
        {petName}
      </div>
      <div
        style={{
          height: "60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",

          alignItems: "center",
        }}
      >
        <div>
          <InfoBox>성별: {petSex}</InfoBox>
          <InfoBox>무게: {petWeight}kg</InfoBox>
        </div>
        <div>
          <InfoBox>나이: {petAge}</InfoBox>
          <InfoBox>중성화 유무: {petNeuter}</InfoBox>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>주의해야할 음식</div>
      <div
        id="allergyFood"
        style={{
          display: "flex",
          width: "350px",
          height: "100px",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <div id="allergyFoodBtn"></div>
      </div>
      <div style={{ height: "30px", width: "350px" }}>알레르기 검사 데이터</div>
    </div>
  );
}

export default PetInfo;

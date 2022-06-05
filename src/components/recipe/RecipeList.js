import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import recipeType from "../auth/recipeComp";
import CookedContainer from "./CookedContainer";
import PureeContainer from "./PureeContainer";
import RawContainer from "./RawContainer";
import SnackContainer from "./SnackContainer";
const CategoryBtn = styled.button`
  font-weight: bold;
  width: 50px;
  height: 50px;
  border: 2px solid #ed7567;
  border-radius: 25px;
  cursor: pointer;
`;
function RecipeList() {
  const [content, setContent] = useState();
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const history = useHistory();
  const [recipe, setRecipe] = useState([]);
  const [petInfo, setPetInfo] = useState([]);
  const [petKind, setPetKind] = useState("");
  const [allergyId, setAllergyId] = useState([]); //해당 반려동물의 알러지id배열
  const [allergyFoodArr, setAllergyFoodArr] = useState([]); //해당 반려동물의 알러지음식 배열
  const [foods, setfoods] = useState([]);

  //로그인된 유저의 반려동물 정보
  useEffect(() => {
    fetch("http://localhost:8080/pet")
      .then((response) => response.json())
      .then((json) => {
        const foundData = json.pets.find((data) => data.pet_id === petId);
        setPetInfo(foundData);
      });
  }, []);

  //종 확인
  useEffect(() => {
    if (petInfo.cat_or_dog === "dog") {
      setPetKind("강아지");
    } else if (petInfo.cat_or_dog === "cat") {
      setPetKind("고양이");
    }
  }, [petInfo]);

  //음식 전체 리스트
  useEffect(() => {
    fetch("http://localhost:8080/food")
      .then((response) => response.json())
      .then((json) => {
        setfoods(json.foods);
      });
  }, []);

  //알러지 음식 확인 ID배열
  useEffect(() => {
    fetch("http://localhost:8080/allergyfood")
      .then((response) => response.json())
      .then((json) => {
        const foundData = json.allergy_food.find(
          (data) => data.pet_id === petId
        );
        var a = foundData.allergy_food_id.split(",").map(Number);
        setAllergyId(a);
      });
  }, [petInfo]);

  //알러지 푸드 아이디를 한글 배열로
  useEffect(() => {
    const arr = [];
    allergyId.map((data) => {
      foods.filter((item) => {
        if (item.id === data) {
          arr.push(item.ingredient);
        }
      });
    });
    setAllergyFoodArr(arr);
  }, [allergyId]);

  //레시피 전체 출력
  useEffect(() => {
    fetch("http://localhost:8080/recipe")
      .then((response) => response.json())
      .then((recipe) => {
        setRecipe(recipe.recipe);
      });
  }, []);

  const buttonValueSetting = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setContent(name);
    if (name === "조리식") {
      document.getElementById("조리식").style.color = "#ed7567";
      document.getElementById("퓨레").style.color = "pink";
      document.getElementById("간식").style.color = "pink";
      document.getElementById("생식").style.color = "pink";
    }
    if (name === "퓨레") {
      document.getElementById("조리식").style.color = "pink";
      document.getElementById("퓨레").style.color = "#ed7567";
      document.getElementById("간식").style.color = "pink";
      document.getElementById("생식").style.color = "pink";
    }
    if (name === "간식") {
      document.getElementById("조리식").style.color = "pink";
      document.getElementById("퓨레").style.color = "pink";
      document.getElementById("간식").style.color = "#ed7567";
      document.getElementById("생식").style.color = "pink";
    }
    if (name === "생식") {
      document.getElementById("조리식").style.color = "pink";
      document.getElementById("퓨레").style.color = "pink";
      document.getElementById("간식").style.color = "pink";
      document.getElementById("생식").style.color = "#ed7567";
    }
  };
  const selectComponent = {
    조리식: (
      <CookedContainer
        recipe={recipe}
        petKind={petKind}
        allergyFoodArr={allergyFoodArr}
      />
    ),
    퓨레: (
      <PureeContainer
        recipe={recipe}
        petKind={petKind}
        allergyFoodArr={allergyFoodArr}
      />
    ),
    간식: (
      <SnackContainer
        recipe={recipe}
        petKind={petKind}
        allergyFoodArr={allergyFoodArr}
      />
    ),
    생식: <RawContainer />,
  };
  return (
    <div>
      <div>
        <div
          style={{
            width: "330px",
            borderWidth: "2px",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {recipeType.map((data) => {
            return (
              <CategoryBtn
                onClick={buttonValueSetting}
                name={data}
                id={data}
                key={data}
              >
                {data}
              </CategoryBtn>
            );
          })}
        </div>
        {content ? <div>{selectComponent[content]}</div> : <RawContainer />}
      </div>
    </div>
  );
}
export default RecipeList;
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
  background-color: #ed7567;
  color: white;

  border-radius: 7px;
  cursor: pointer;
`;
const WhiteMinibtn = styled.button`
  width: 100px;
  height: 40px;
  color: #ed7567;
  border: #ed7567 solid 1px;
  border-radius: 7px;
  cursor: pointer;
`;
function RecipeDetail() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [recipe, setRecipe] = useState();
  const [recipeName, setRecipeName] = useState("");
  const receivedId = document.location.href.split("?")[1];
  const [PET_DER, setDER] = useState();
  const [ingredientArray, setIngredientArray] = useState();

  //하루권장 섭취량
  useEffect(() => {
    fetch(`http://localhost:8080/Pet_RER`)
      .then((response) => response.json())
      .then((json) => {
        const der = json.Pet_RER.find((data) => data.pet_id === petId);
        setDER(der.DER);
        console.log(PET_DER);
      });
  });

  let body = {
    pet_id: petId,
  };

  useEffect(() => {
    fetch(`http://localhost:8080/recipe/${receivedId}`)
      .then((response) => response.json())
      .then((json) => {
        setRecipe(json.recipe);
      });

    axios
      .post(`http://localhost:8080/recipe/${receivedId}`, body)
      .then((res) => {
        //console.log(res.data);
        setIngredientArray(res.data);
      });
  }, []); //레시피 재료정보 g단위
  console.log(ingredientArray);
  useEffect(() => {
    //ingredientArray.filter((item) => item.foodDescription_KOR.includes(searchField))
    if (ingredientArray !== undefined) {
      ingredientArray.filter((item) => {
        const Icontainer = document.getElementById("ingredientContainer");
        const Ielement = document.createElement("div");
        Ielement.innerHTML = item.ingredient2 + "  " + item.weight + "g";
        Ielement.id = "Ielement";
        if (Icontainer.childElementCount + 1 !== ingredientArray.length)
          Icontainer.appendChild(Ielement);
      });
    }
  });

  useEffect(() => {
    if (recipe !== undefined) {
      setRecipeName(recipe.recipe_name);
    }
  }, [recipe]);

  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>레시피 정보 상세 보기</div>
          <div> </div>
        </Header>
        <div>
          <img src={RecipeImg} style={{ height: "150px" }} />
        </div>
        <div
          className='recipeInfo'
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: "400px",
            alignItems: "center",
          }}
        >
          <div
            className='title'
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className='element'></div>
            <div
              className='name'
              style={{
                fontSize: "17px",
                marginBottom: "10px",
              }}
            >
              {recipeName}
            </div>
            <div
              className='create'
              style={{
                display: "flex",
                //flexDirection: "column",
                alignItems: "center",
                height: "60px",
              }}
            >
              <WhiteMinibtn>♥ 찜하기</WhiteMinibtn>
              <Minibutn>레시피 제작방법</Minibutn>
            </div>
            <div
              style={{
                fontSize: "13px",
                height: "33px",
              }}
            >
              하루 권장 섭취량: {PET_DER}kcal
            </div>
          </div>
          <div className='ingredient'>
            <div style={{ fontSize: "17px", height: "27px" }}>
              재료 정보 (g)
            </div>
            <div
              style={{
                width: "350px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                borderColor: "#E0E0E0",
                borderWidth: "2px",
                borderStyle: "none none solid none",
              }}
            ></div>
            <div
              id='ingredientContainer'
              style={{
                height: "280px",
                marginTop: "5px",
              }}
            ></div>
          </div>
          <div className='nutrition'>
            <div className='nutrition_title'></div>
            <div className='nutrition_info'></div>
          </div>
        </div>
      </AuthLayout>
    </StartLayout>
  );
}
export default RecipeDetail;

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../auth/AuthLayout";
import StartLayout from "../auth/StartLayout";
import BackButton from "../feed/BackButton";
import Header from "../feed/Header";
import RecipeImg from "../../image/recipeImg.png";
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

function RecipeDetail() {
  const [recipe, setRecipe] = useState();
  const [recipeName, setRecipeName] = useState("");
  const receivedId = document.location.href.split("?")[1];

  useEffect(() => {
    fetch(`http://localhost:8080/recipe/${receivedId}`)
      .then((response) => response.json())
      .then((json) => {
        setRecipe(json.recipe);
      });
  }, []);
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
          <img src={RecipeImg} style={{ height: "200px" }} />
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
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              {recipeName}
            </div>
            <div
              className='create'
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Minibutn>레시피 제작방법</Minibutn>
            </div>
          </div>
          <div className='ingredient'>
            <div></div>
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

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const RecipeListBtn = styled.button`
  width: 300px;
  height: 150px;
  background-color: ghostwhite;
  cursor: pointer;
  border: solid 0.5px gray;
`;
function SnackContainer(props) {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipe, setRecipe] = useState(props.recipe);
  const [petKind, setPetKind] = useState(props.petKind);
  const [allergyFoodArr, setAllergyFoodArr] = useState(props.allergyFoodArr); //해당 반려동물의 알러지음식 배열
  const [recipeResult, setRecipeResult] = useState([]);
  const currentScroll = useRef({ scrollTop: 0, scrollBottom: 300 });
  const containerRef = useRef();
  const onScroll = (e) => {
    currentScroll.current = {
      scrollTop: e.target.scrollTop,
      scrollBottom: e.target.scrollTop + 300,
    };
  };
  function detailPage(indexNO) {
    document.location.href = `/detail?${indexNO}`;
  }
  useEffect(() => {
    setRecipe(props.recipe);
    setPetKind(props.petKind);
    setAllergyFoodArr(props.allergyFoodArr);
  });

  //검열 레시피 category,종
  useEffect(() => {
    const arr2 = [];
    //allergyFoodArr.map((data) => {
    recipe.filter((item) => {
      if (item.category === "간식" && item.kinds === petKind) {
        arr2.push(item);
      }
    });
    setFilteredRecipes(arr2);
  }, [recipe]);

  //검열 레시피 allergyfood 제외
  useEffect(() => {
    const arr3 = [];
    filteredRecipes.filter((item) => {
      allergyFoodArr.map((data) => {
        //만약 null이 아닌데 알러지유발 식재료의 값을 가지고 있으면 break
        if (item.ingredient1 !== null) {
          if (
            item.ingredient1.includes(data) ||
            item.ingredient1 === "그램수 없음"
          ) {
            arr3.push(item);
          }
        }
        if (item.ingredient2 !== null) {
          if (item.ingredient2.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient3 !== null) {
          if (item.ingredient3.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient4 !== null) {
          if (item.ingredient4.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient5 !== null) {
          if (item.ingredient5.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient6 !== null) {
          if (item.ingredient6.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient7 !== null) {
          if (item.ingredient7.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient8 !== null) {
          if (item.ingredient8.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient9 !== null) {
          if (item.ingredient9.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient10 !== null) {
          if (item.ingredient10.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient11 !== null) {
          if (item.ingredient11.includes(data)) {
            arr3.push(item);
          }
        }
        if (item.ingredient12 !== null) {
          if (item.ingredient12.includes(data)) {
            arr3.push(item);
          }
        }
      });
    });
    const set = new Set(arr3);
    const uniqueSet = [...set];
    var arr4 = filteredRecipes.filter(function (data) {
      return !uniqueSet.includes(data);
    });
    setRecipeResult(arr4);
    console.log(arr4);
  }, [filteredRecipes]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className='list-container'
        onScroll={onScroll}
        ref={containerRef}
        style={{
          textAlign: "center",
          height: "475px",
        }}
      >
        <div>
          {recipeResult.map((food) => (
            <RecipeListBtn
              key={food.indexNO}
              food={food}
              onClick={() => detailPage(food.indexNO)}
            >
              {food.recipe_name}
            </RecipeListBtn>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SnackContainer;

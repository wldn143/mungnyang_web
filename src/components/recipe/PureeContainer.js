import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function PureeContainer(props) {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const history = useHistory();
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipe, setRecipe] = useState(props.recipe);
  const [petKind, setPetKind] = useState(props.petKind);
  const [allergyFoodArr, setAllergyFoodArr] = useState(props.allergyFoodArr); //해당 반려동물의 알러지음식 배열

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
      if (item.category === "퓨레" && item.kinds === petKind) {
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
    var recipeResult = filteredRecipes.filter(function (data) {
      return !uniqueSet.includes(data);
    });
    console.log(recipeResult);
  }, [filteredRecipes]);
  return <div>puree</div>;
}
export default PureeContainer;

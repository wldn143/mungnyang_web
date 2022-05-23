import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function MeatContainer() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [meatOcrResult, setMeatOcrResult] = useState([]);
  const [duck, setDuck] = useState([]);
  const [lamb, setLamb] = useState([]);
  const [beef, setBeef] = useState([]);
  const [chicken, setChicken] = useState([]);
  const [turckey, setTurckey] = useState([]);
  const [pork, setPork] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/OCR_result_meat")
      .then((response) => response.json())
      .then((data) => {
        setMeatOcrResult(data.OCR_result_meat);
      });
  }, []);

  useEffect(() => {
    if (meatOcrResult.filter((item) => item.pet_id === petId).length) {
      let userMeatResult = meatOcrResult.filter(
        (item) => item.pet_id === petId
      );
      setDuck(userMeatResult[0].duck);
      setLamb(userMeatResult[0].lamb);
      setBeef(userMeatResult[0].beef);
      setChicken(userMeatResult[0].chicken);
      setTurckey(userMeatResult[0].turckey);
      setPork(userMeatResult[0].pork);
    }
  });

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>오리고기</Name>
          <Name>양고기</Name>
          <Name>소고기</Name>
          <Name>닭고기</Name>
          <Name>칠면조고기</Name>
          <Name>돼지고기</Name>
        </NameBox>
        <ResBox>
          <Res>{duck}</Res>
          <Res>{lamb}</Res>
          <Res>{beef}</Res>
          <Res>{chicken}</Res>
          <Res>{turckey}</Res>
          <Res>{pork}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default MeatContainer;

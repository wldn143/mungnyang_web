import { useEffect, useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function VegeContainer() {
  const [VegeOcrResult, setVegeOcrResult] = useState([]);
  const [carrot, setCarrot] = useState([]);
  const [corn, setcorn] = useState([]);
  const [potato, setPotato] = useState([]);
  const [s_potato, setSpotato] = useState([]);
  const [pumpkin, setPumpkin] = useState([]);
  const [broccoli, setBroccoli] = useState([]);
  const [cabbage, setCabbage] = useState([]);
  const [pea, setPea] = useState([]);
  const [tomato, setTomato] = useState([]);
  const [seaweed, setSeaweed] = useState([]);
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  useEffect(() => {
    fetch("http://localhost:8080/OCR_result_vege")
      .then((response) => response.json())
      .then((data) => {
        setVegeOcrResult(data.OCR_result_vege);
      });
  }, []);

  useEffect(() => {
    if (VegeOcrResult.filter((item) => item.pet_id === petId).length) {
      let userVegeResult = VegeOcrResult.filter(
        (item) => item.pet_id === petId
      );
      setCarrot(userVegeResult[0].carrot);
      setcorn(userVegeResult[0].corn);
      setPotato(userVegeResult[0].potato);
      setSpotato(userVegeResult[0].s_potato);
      setPumpkin(userVegeResult[0].pumpkin);
      setBroccoli(userVegeResult[0].broccoli);
      setCabbage(userVegeResult[0].cabbage);
      setPea(userVegeResult[0].pea);
      setTomato(userVegeResult[0].tomato);
      setSeaweed(userVegeResult[0].seaweed);
    }
  });

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>당근</Name>
          <Name>옥수수</Name>
          <Name>감자</Name>
          <Name>고구마</Name>
          <Name>호박</Name>
          <Name>브로콜리</Name>
          <Name>양배추</Name>
          <Name>완두콩</Name>
          <Name>토마토</Name>
          <Name>김/미역</Name>
        </NameBox>
        <ResBox>
          <Res>{carrot}</Res>
          <Res>{corn}</Res>
          <Res>{potato}</Res>
          <Res>{s_potato}</Res>
          <Res>{pumpkin}</Res>
          <Res>{broccoli}</Res>
          <Res>{cabbage}</Res>
          <Res>{pea}</Res>
          <Res>{tomato}</Res>
          <Res>{seaweed}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default VegeContainer;

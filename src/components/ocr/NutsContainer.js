import { useEffect, useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function NutsContainer() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [NutsOcrResult, setNutsOcrResult] = useState([]);
  const [bean, setBean] = useState([]);
  const [peanut, setPeanut] = useState([]);
  const [rice, setRice] = useState([]);
  const [flour, setFlour] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/OCR_result_nuts")
      .then((response) => response.json())
      .then((data) => {
        setNutsOcrResult(data.OCR_result_nuts);
      });
  }, []);

  useEffect(() => {
    if (NutsOcrResult.filter((item) => item.pet_id === petId).length) {
      let userMeatResult = NutsOcrResult.filter(
        (item) => item.pet_id === petId
      );
      setBean(userMeatResult[0].bean);
      setPeanut(userMeatResult[0].peanut);
      setRice(userMeatResult[0].rice);
      setFlour(userMeatResult[0].flour);
    }
  });

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>콩</Name>
          <Name>땅콩</Name>
          <Name>쌀</Name>
          <Name>밀가루</Name>
        </NameBox>
        <ResBox>
          <Res>{bean}</Res>
          <Res>{peanut}</Res>
          <Res>{rice}</Res>
          <Res>{flour}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default NutsContainer;

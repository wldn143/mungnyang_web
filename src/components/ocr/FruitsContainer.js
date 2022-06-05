import { useEffect, useState } from "react";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function FruitsContainer() {
  let petId = parseInt(sessionStorage.getItem("pet_id"));
  const [fruitsOcrResult, setFruitsOcrResult] = useState([]);
  const [w_melon, setWmelon] = useState([]);
  const [melon, setMelon] = useState([]);
  const [pear, setPear] = useState([]);
  const [mandarine, setMandarine] = useState([]);
  const [orange, setOrange] = useState([]);
  const [apple, setApple] = useState([]);
  const [banana, setBanana] = useState([]);
  const [guava, setGuava] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/OCR_result_fruit")
      .then((response) => response.json())
      .then((data) => {
        setFruitsOcrResult(data.OCR_result_fruit);
      });
  }, []);

  useEffect(() => {
    if (fruitsOcrResult.filter((item) => item.pet_id === petId).length) {
      let userFruitsResult = fruitsOcrResult.filter(
        (item) => item.pet_id === petId
      );
      setWmelon(userFruitsResult[0].w_melon);
      setMelon(userFruitsResult[0].melon);
      setPear(userFruitsResult[0].pear);
      setMandarine(userFruitsResult[0].mandarine);
      setOrange(userFruitsResult[0].orange);
      setApple(userFruitsResult[0].apple);
      setBanana(userFruitsResult[0].banana);
      setGuava(userFruitsResult[0].guava);
    }
  });

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>수박</Name>
          <Name>멜론</Name>
          <Name>배</Name>
          <Name>귤</Name>
          <Name>오렌지</Name>
          <Name>사과</Name>
          <Name>바나나</Name>
          <Name>구아바</Name>
        </NameBox>
        <ResBox>
          <Res>{w_melon}</Res>
          <Res>{melon}</Res>
          <Res>{pear}</Res>
          <Res>{mandarine}</Res>
          <Res>{orange}</Res>
          <Res>{apple}</Res>
          <Res>{banana}</Res>
          <Res>{guava}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default FruitsContainer;

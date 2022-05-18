import styled from "styled-components";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function FruitsContainer({ children }) {
  let w_melon = sessionStorage.getItem("w_melon");
  let melon = sessionStorage.getItem("melon");
  let pear = sessionStorage.getItem("pear");
  let mandarine = sessionStorage.getItem("mandarine");
  let orange = sessionStorage.getItem("orange");
  let apple = sessionStorage.getItem("apple");
  let banana = sessionStorage.getItem("banana");
  let guava = sessionStorage.getItem("guava");

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

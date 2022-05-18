import styled from "styled-components";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function SeafoodContainer({ children }) {
  let crab = sessionStorage.getItem("crab");
  let shrimp = sessionStorage.getItem("shrimp");
  let mackerel = sessionStorage.getItem("mackerel");
  let sardine = sessionStorage.getItem("sardine");
  let anchovy = sessionStorage.getItem("anchovy");
  let cod = sessionStorage.getItem("cod");
  let salmon = sessionStorage.getItem("salmon");
  let tuna = sessionStorage.getItem("tuna");

  return (
    <Container>
      <ElementContainer>
        <NameBox>
          <Name>게</Name>
          <Name>새우</Name>
          <Name>고등어</Name>
          <Name>정어리</Name>
          <Name>멸치</Name>
          <Name>대구</Name>
          <Name>연어</Name>
          <Name>참치</Name>
        </NameBox>
        <ResBox>
          <Res>{crab}</Res>
          <Res>{shrimp}</Res>
          <Res>{mackerel}</Res>
          <Res>{sardine}</Res>
          <Res>{anchovy}</Res>
          <Res>{cod}</Res>
          <Res>{salmon}</Res>
          <Res>{tuna}</Res>
        </ResBox>
      </ElementContainer>
    </Container>
  );
}
export default SeafoodContainer;

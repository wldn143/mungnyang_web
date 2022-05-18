import styled from "styled-components";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function VegeContainer({ children }) {
  let carrot = sessionStorage.getItem("carrot");
  let corn = sessionStorage.getItem("corn");
  let potato = sessionStorage.getItem("potato");
  let s_potato = sessionStorage.getItem("s_potato");
  let pumpkin = sessionStorage.getItem("pumpkin");
  let broccoli = sessionStorage.getItem("broccoli");
  let cabbage = sessionStorage.getItem("cabbage");
  let pea = sessionStorage.getItem("pea");
  let tomato = sessionStorage.getItem("tomato");
  let seaweed = sessionStorage.getItem("seaweed");

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

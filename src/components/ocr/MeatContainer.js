import styled from "styled-components";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function MeatContainer({ children }) {
  let duck = sessionStorage.getItem("duck");
  let lamb = sessionStorage.getItem("lamb");
  let beef = sessionStorage.getItem("beef");
  let chicken = sessionStorage.getItem("chicken");
  let turckey = sessionStorage.getItem("turckey");
  let pork = sessionStorage.getItem("pork");

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

import styled from "styled-components";
import {
  Container,
  ElementContainer,
  NameBox,
  Name,
  ResBox,
  Res,
} from "./OcrContainer";

function NutsContainer({ children }) {
  let bean = sessionStorage.getItem("bean");
  let peanut = sessionStorage.getItem("peanut");
  let rice = sessionStorage.getItem("rice");
  let flour = sessionStorage.getItem("flour");

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

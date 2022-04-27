import styled from "styled-components";

const Contatiner = styled.div`
  width: 110%;
  height: 200px;
  display: flex;
  justify-content: space-around;
`;

function OcrContainer({ children }) {
  return <Contatiner>{children}</Contatiner>;
}
export default OcrContainer;

import { useEffect, useState } from "react";
import styled from "styled-components";
import comp from "../auth/comp";
import MeatContainer from "./MeatContainer";
import SeafoodContainer from "./SeaFoodContainer";
import VegeContainer from "./VegeContainer";
import NutsContainer from "./NutsContainer";
import FruitsContainer from "./FruitsContainer";
const OcrNavBtn = styled.button`
  height: 35px;
  color: #ed7567;
  font-size: 15px;
  margin: 0px 15px 0px 5px;
  font-weight: bolder;
  cursor: pointer;
`;
function OcrDatagraph() {
  const [content, setContent] = useState();
  const buttonValueSetting = (e) => {
    e.preventDefault();
    const { name } = e.target;
    setContent(name);
    if (name === "육류") {
      document.getElementById("육류").style.color = "#ed7567";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "해산물") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "#ed7567";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "과일") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "#ed7567";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "야채") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "#ed7567";
      document.getElementById("견과류").style.color = "pink";
    }
    if (name === "견과류") {
      document.getElementById("육류").style.color = "pink";
      document.getElementById("해산물").style.color = "pink";
      document.getElementById("과일").style.color = "pink";
      document.getElementById("야채").style.color = "pink";
      document.getElementById("견과류").style.color = "#ed7567";
    }
  };
  const selectComponent = {
    육류: <MeatContainer />,
    해산물: <SeafoodContainer />,
    과일: <FruitsContainer />,
    야채: <VegeContainer />,
    견과류: <NutsContainer />,
  };
  return (
    <div>
      <div>
        <div
          style={{
            width: "330px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            borderColor: "#E0E0E0",
            borderWidth: "2px",
            borderStyle: "none none solid none",
          }}
        >
          {comp.map((data) => {
            return (
              <OcrNavBtn
                onClick={buttonValueSetting}
                name={data}
                id={data}
                key={data}
              >
                {data}
              </OcrNavBtn>
            );
          })}
        </div>
        {content ? (
          <div>{selectComponent[content]}</div>
        ) : (
          <div style={{ width: "90%", height: "425px" }}></div>
        )}
      </div>
    </div>
  );
}
export default OcrDatagraph;

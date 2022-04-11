import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./petInfo.css";
import { LeftOutlined } from "@ant-design/icons";

function Signup3() {
  const history = useHistory();

  function getCheckboxValue() {
    // 선택된 목록에서 value 찾기
    let walk = "";
    document.querySelectorAll('input[name="walk"]:checked').forEach((el) => {
      walk = el.value;
    });

    var health = new Array();
    // let result = "";
    document.querySelectorAll('input[name="health"]:checked').forEach((el) => {
      health.push(el.value);
    });
    // 출력

    let allergy = "";
    document.querySelectorAll('input[name="allergy"]:checked').forEach((el) => {
      allergy = el.value;
    });
  }

  return (
    <div id="container">
      <div id="signUpLayout">
        <div id="head">
          <div className="back">
            <Button
              onClick={function () {
                history.push("/signup2");
              }}
              icon={<LeftOutlined />}
            ></Button>
          </div>

          <div>
            <p>반려동물 정보 입력</p>
          </div>
          <p> </p>
        </div>
        <div id="outline">
          <div id="authLayout">
            <div id="formContainer2">
              <form
                action="http://localhost:3000/complete"
                method="get"
                id="signUpForm2"
              >
                <p>산책을 매일 하나요?</p>
                <div className="select">
                  <input type="radio" id="walk1" name="walk" value="yes" />
                  <label htmlFor="walk1">YES</label>
                  <input type="radio" id="walk2" name="walk" value="no" />
                  <label htmlFor="walk2">NO</label>
                </div>
                <p>건강고민이 있나요?</p>
                <div className="select">
                  <input
                    type="checkbox"
                    id="health1"
                    name="health"
                    value="allery"
                  />
                  <label htmlFor="health1">알레르기</label>
                  <input
                    type="checkbox"
                    id="health2"
                    name="health"
                    value="viscera"
                  />
                  <label htmlFor="health2">장</label>
                  <input
                    type="checkbox"
                    id="health3"
                    name="health"
                    value="teeth"
                  />
                  <label htmlFor="health3">이빨/구강</label>
                  <input
                    type="checkbox"
                    id="health4"
                    name="health"
                    value="bone"
                  />
                  <label htmlFor="health4">뼈/관절</label>
                  <input
                    type="checkbox"
                    id="health5"
                    name="health"
                    value="fatness"
                  />
                  <label htmlFor="health5">비만</label>
                  <input
                    type="checkbox"
                    id="health6"
                    name="health"
                    value="skin fur"
                  />
                  <label htmlFor="health6">피부/모질</label>
                  <input
                    type="checkbox"
                    id="health7"
                    name="health"
                    value="old"
                  />

                  <label htmlFor="health7">노령</label>
                  <input
                    type="checkbox"
                    id="health8"
                    name="health"
                    value="kidneys"
                  />
                  <label htmlFor="health8">신장/요로</label>
                  <input
                    type="checkbox"
                    id="health9"
                    name="health"
                    value="breath"
                  />
                  <label htmlFor="health9">호흡기</label>
                  <input
                    type="checkbox"
                    id="health10"
                    name="health"
                    value="diabetes"
                  />
                  <label htmlFor="health10">당뇨</label>

                  <input
                    type="checkbox"
                    id="health11"
                    name="health"
                    value="heart"
                  />
                  <label htmlFor="health11">심장</label>
                  <input
                    type="checkbox"
                    id="health12"
                    name="health"
                    value="eyes_ears"
                  />
                  <label htmlFor="health12">눈/귀</label>
                </div>
                <p>알레르기가 있나요?</p>
                <div className="select">
                  <input type="radio" id="allergy1" name="allergy" value="no" />
                  <label htmlFor="allergy1">YES</label>
                  <input
                    type="radio"
                    id="allergy2"
                    name="allergy"
                    value="yes"
                  />
                  <label htmlFor="allergy2">NO</label>
                </div>
                <button
                  className="btn"
                  type="submit"
                  onClick={() => getCheckboxValue()}
                  form="signUpForm2"
                >
                  다음
                </button>
                <div id="result"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup3;

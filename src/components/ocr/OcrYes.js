import OcrDatagraph from "./OcrDatagraph";
import PetInfo from "../feed/PetInfo";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/constants";
//OCR 업로드 한 유저의 마이/펫 페이지
function OcrYes() {
  const [meatOcrResult, setMeatOcrResult] = useState([]);
  const [seafoodOcrResult, setSeafoodOcrResult] = useState([]);
  const [fruitsOcrResult, setFruitsOcrResult] = useState([]);
  const [VegeOcrResult, setVegeOcrResult] = useState([]);
  const [NutsOcrResult, setNutsOcrResult] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/OCR_result_meat`)
      .then((response) => response.json())
      .then((data) => {
        setMeatOcrResult(data.OCR_result_meat);
      });
    fetch(`${API_URL}/OCR_result_seafood`)
      .then((response) => response.json())
      .then((data) => {
        setSeafoodOcrResult(data.OCR_result_seafood);
      });
    fetch(`${API_URL}/OCR_result_fruit`)
      .then((response) => response.json())
      .then((data) => {
        setFruitsOcrResult(data.OCR_result_fruit);
      });
    fetch(`${API_URL}/OCR_result_vege`)
      .then((response) => response.json())
      .then((data) => {
        setVegeOcrResult(data.OCR_result_vege);
      });
    fetch(`${API_URL}/OCR_result_nuts`)
      .then((response) => response.json())
      .then((data) => {
        setNutsOcrResult(data.OCR_result_nuts);
      });
  }, []);
  return (
    <div>
      <PetInfo />
      <OcrDatagraph
        meatOcrResult={meatOcrResult}
        seafoodOcrResult={seafoodOcrResult}
        fruitsOcrResult={fruitsOcrResult}
        VegeOcrResult={VegeOcrResult}
        NutsOcrResult={NutsOcrResult}
      />
    </div>
  );
}
export default OcrYes;

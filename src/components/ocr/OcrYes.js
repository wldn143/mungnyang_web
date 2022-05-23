import OcrDatagraph from "./OcrDatagraph";
import PetInfo from "../feed/PetInfo";
//OCR 업로드 한 유저의 마이/펫 페이지
function OcrYes() {
  return (
    <div>
      <PetInfo />
      <OcrDatagraph />
    </div>
  );
}
export default OcrYes;

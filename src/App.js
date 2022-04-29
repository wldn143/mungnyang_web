import "./App.css";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./screens/Login";
import SignUp2 from "./screens/SignUp2";
import Ocr from "./screens/Ocr";
import "antd/dist/antd.min.css";
import routes from "./routes";
import SignUp3 from "./screens/SignUp3";
import SignUpComplete from "./screens/SignUpComplete";
import OcrUpload from "./screens/OcrUpload";
import OcrHw from "./screens/OcrHw";
import MyPage from "./screens/MyPage";
import MainPage from "./screens/MainPage";
function App() {
  return (
    <div>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route path={routes.logIn}>
        <Login />
      </Route>
      <Route path={routes.signUp}>
        <SignUp />
      </Route>
      <Route exact={true} path="/sign-up2">
        <SignUp2 />
      </Route>
      <Route exact={true} path="/sign-up3">
        <SignUp3 />
      </Route>
      <Route exact={true} path="/sign-up-complete">
        <SignUpComplete />
      </Route>
      <Route exact={true} path="/ocr">
        <Ocr />
      </Route>
      <Route exact={true} path="/ocr-upload">
        <OcrUpload />
      </Route>
      <Route exact={true} path="/ocr-handwrite">
        <OcrHw />
      </Route>
      <Route exact={true} path="/mypage">
        <MyPage />
      </Route>
      <Route exact={true} path="/mainpage">
        <MainPage />
      </Route>
    </div>

    /* <div id="header"></div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/login">
            <Login />
          </Route>
          <Route exact={true} path="/signup">
            <Signup />
          </Route>
          <Route exact={true} path="/signup2">
            <Signup2 />
          </Route>
          <Route exact={true} path="/signup3">
            <Signup3 />
          </Route>
          <Route exact={true} path="/complete">
            <Complete />
          </Route>
          <Route exact={true} path="/main">
            <Main />
          </Route>
          <Route exact={true} path="/ocr">
            <Ocr />
          </Route>
          <Route exact={true} path="/ocr_upload">
            <Ocr_Upload />
          </Route>
        </Switch>
      </div>
    </div> */
  );
}

export default App;

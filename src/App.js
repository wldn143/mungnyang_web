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
import React, { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("user") === null) {
      // sessionStorage 에 user 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });

  return (
    <div>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route exact={true} path="/log-in">
        {isLogin ? (
          // Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
          <MainPage isLogin={isLogin} />
        ) : (
          <Login />
        )}
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
    </div>
  );
}

export default App;

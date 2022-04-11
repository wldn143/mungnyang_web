import "./App.css";
import Home from "./Home";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Signup2 from "../src/Signup/PetInfo/PetInfo1";
import Signup3 from "./Signup/PetInfo/petInfo2";
import Complete from "./Signup/PetInfo/Complete";
import Main from "./main";
import "antd/dist/antd.min.css";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header"></div>
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
        </Switch>
      </div>
    </div>
  );
}

export default App;

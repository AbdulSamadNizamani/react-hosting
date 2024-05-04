import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signin from './Component/Signin';
import Service from "./Component/Service";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Switch>
          <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;

import "./App.css";
import CheckAngles from "./CheckAngles/CheckAngles";
import CalculateArea from "./CalculateArea/CalculateArea";
import CalculateHypotenuse from "./ClaculateHypotenuse/ClaculateHypotenuse";
import Quiz from "./Quiz/Quiz";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="main-section">
      <h2 className="triangles-heading">Lets have some fun with triangles!!</h2>
      <div className="links">
        <Router>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/checkangles"
          >
            CheckAngles
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/calculatearea"
          >
            CalculateArea
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/calculatehypotenuse"
          >
            CalculateHypotenuse
          </NavLink>
          <NavLink activeClassName="active" className="nav-link" to="/quiz">
            Take Quiz
          </NavLink>

          <Switch>
            <Route path="/checkangles" component={CheckAngles} />
            <Route path="/calculatearea" component={CalculateArea} />
            <Route
              path="/calculatehypotenuse"
              component={CalculateHypotenuse}
            />
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;

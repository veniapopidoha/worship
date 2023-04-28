import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Login from './pages/LoginPage/Login';
import SignUp from './pages/SignUpPage/SignUp';
import { Planning } from './pages/Planning';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/create-plan" component={Planning} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

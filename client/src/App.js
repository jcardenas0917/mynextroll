import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Journal from "./pages/Journal";
import Community from "./pages/Community";
import Register from './pages/Register';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/journal" component={Journal} />
            <Route exact path="/community" component={Community} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>


  );
}

export default App;

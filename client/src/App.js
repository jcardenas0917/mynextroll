import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Journal from "./pages/Journal";
import Community from "./pages/Community";
import NoMatch from './pages/NoMatch';


// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/journal" component={Journal} />
            <PrivateRoute exact path="/community" component={Community} />
            <PrivateRoute component={NoMatch} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

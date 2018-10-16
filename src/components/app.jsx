import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "isomorphic-fetch";
import "es6-promise";
import GhibliLogo from "../assets/logo.png";
import Home from "./home";
import Films from "./films";
import People from "./people";
import singleFilm from "./singleFilm";
import singlePerson from "./singlePerson"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
        <img className="ml-4 mr-2 my-3" alt="did not load" src={GhibliLogo} />
          <Link to="/home">
            <button type="button">Go Home</button>
          </Link>
          <Link to="/films">
            <button type="button">View Films</button>
          </Link>
          <Link to="/people">
            <button type="button">View People</button>
          </Link>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route exact path="/films/:id" component={singleFilm}/>
            <Route exact path="/people/:id" component={singlePerson}/>
            <Redirect from="/" to="/home"/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;

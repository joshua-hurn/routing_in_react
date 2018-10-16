import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import GhibliLogo from "../assets/logo.png";
import Home from "./home";
import Films from "./films";
import People from "./people";
import singleFilm from "./singleFilm";
import singlePerson from "./singlePerson";
import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="text-center">
            <img
              className="img-fluid ml-4 mr-2 my-3"
              alt="did not load"
              src={GhibliLogo}
            />
            <br />
            <Link to="/home">
              <button className="btn btn-primary mx-1 my-1" type="button">
                Go Home
              </button>
            </Link>
            <Link to="/films">
              <button className="btn btn-primary mr-1 my-1" type="button">
                View Films
              </button>
            </Link>
            <Link to="/people">
              <button className="btn btn-primary mr-1 my-1" type="button">
                View People
              </button>
            </Link>
          </div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route exact path="/films/:id" component={singleFilm} />
            <Route exact path="/people/:id" component={singlePerson} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";

import Home from "../Home/Home";
import About from "../About/About";
import Position from "../Position/Position";
import Add from "../Add/Add";
import Contact from "../Contact/Contact";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/position" component={Position} />
            <Route path="/add" component={Add} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;

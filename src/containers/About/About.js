import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import AboutPage from "../../components/Pages/AboutPage/AboutPage";
import axios from "axios";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class About extends Component {
  state = {
    aboutPage: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/aboutPage")
      .then(response => {
        this.setState({
          aboutPage: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { aboutPage } = this.state;

    return (
      <Switch>
        <Route
          path={this.props.match.url + "/:id"}
          render={props => <AboutPage aboutPage={aboutPage} {...props} />}
        />
      </Switch>
    );
  }
}

export default withErrorHandler(About, axios);

import React, { Component } from "react";

import PositionPage from "../../components/Pages/PositionPage/PositionPage";

import { Route, Switch } from "react-router-dom";

import axios from "axios";

class Position extends Component {
  state = {
    fetchedData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/positionPoses")
      .then(response => {
        this.setState({ fetchedData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { fetchedData } = this.state;
    return (
      <Switch>
        <Route
          path={this.props.match.url + "/:id"}
          render={props => (
            <PositionPage {...props} fetchedData={fetchedData} />
          )}
        />
      </Switch>
    );
  }
}

export default Position;

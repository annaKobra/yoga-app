import React, { Component } from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

class NavigationItems extends Component {
  state = {
    selectedItem: null
  };

  selectItemHandler = selectedTitle => {
    this.setState({
      selectedItem:
        this.state.selectedItem === selectedTitle ? null : selectedTitle
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem
          linkTo="/"
          title="HOME"
          selectedItem={selectedItem}
          clicked={this.selectItemHandler}
        />
        <NavigationItem
          linkTo="/about"
          elements={["What is yoga", "History", "Types of yoga"]}
          title="ABOUT"
          selectedItem={selectedItem}
          clicked={this.selectItemHandler}
        />
        <NavigationItem
          linkTo="/position"
          title="POSITION"
          elements={[
            "Balance Poses",
            "Seated Poses",
            "Standing Poses",
            "Supine Poses"
          ]}
          selectedItem={selectedItem}
          clicked={this.selectItemHandler}
        />
        <NavigationItem
          linkTo="/add"
          title="ADD"
          selectedItem={selectedItem}
          clicked={this.selectItemHandler}
        />
        <NavigationItem
          linkTo="contact"
          title="CONTACT"
          selectedItem={selectedItem}
          clicked={this.selectItemHandler}
        />
      </ul>
    );
  }
}

export default NavigationItems;

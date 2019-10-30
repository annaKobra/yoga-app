import React, { Component } from "react";

import classes from "./NavigationItem.module.css";

import { NavLink, withRouter } from "react-router-dom";

const paths = [
  { newPath: "/what-is-yoga", element: "What is yoga" },
  { newPath: "/history", element: "History" },
  { newPath: "/types-of-yoga", element: "Types of yoga" },
  { newPath: "/balance-poses", element: "Balance Poses" },
  { newPath: "/seated-poses", element: "Seated Poses" },
  { newPath: "/standing-poses", element: "Standing Poses" },
  { newPath: "/supine-poses", element: "Supine Poses" }
];
class NavigationItem extends Component {
  selectItem = () => {
    this.props.clicked(this.props.title);
  };

  clickedElemnt = elem => {
    paths.map(path => {
      if (path.element === elem) {
        return this.props.history.push(
          this.props.location.pathname + path.newPath
        );
      }
    });
  };

  render() {
    const { linkTo, title, elements, selectedItem } = this.props;

    return (
      <li onClick={this.selectItem} className={classes.NavigationItem}>
        <NavLink to={linkTo} activeClassName={classes.active} exact>
          {title}
        </NavLink>
        {elements && selectedItem === title && (
          <ul>
            {elements.map(elem => (
              <p key={elem} onClick={() => this.clickedElemnt(elem)}>
                {elem}
              </p>
            ))}
          </ul>
        )}
      </li>
    );
  }
}

export default withRouter(NavigationItem);

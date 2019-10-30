import React from "react";

import classes from "./RightArrow.module.css";
import Button from "../../../../../UI/Button/Button";

const rightArrow = props => (
  <div className={classes.RightArrow}>
    <Button clicked={props.clicked}>
      <i class="fas fa-arrow-right"></i>
    </Button>
  </div>
);

export default rightArrow;

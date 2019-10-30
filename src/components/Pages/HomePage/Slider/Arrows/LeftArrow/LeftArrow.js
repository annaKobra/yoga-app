import React from "react";

import classes from "./LeftArrow.module.css";
import Button from "../../../../../UI/Button/Button";

const leftArrow = props => (
  <div className={classes.LeftArrow}>
    <Button clicked={props.clicked}>
      <i class="fas fa-arrow-left"></i>
    </Button>
  </div>
);

export default leftArrow;

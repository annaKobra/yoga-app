import React from "react";

import classes from "./Slide.module.css";

const slide = props => {
  const styles = {
    backgroundImage: `url(${props.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  return <div className={classes.Slide} style={styles}></div>;
};

export default slide;

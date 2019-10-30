/* eslint-disable no-template-curly-in-string */
import React, { Component } from "react";

import Slide from "./Slide/Slide";
import LeftArrow from "./Arrows/LeftArrow/LeftArrow";
import RightArrow from "./Arrows/RightArrow/RightArrow";

import classes from "./Slider.module.css";

import slide1 from "../../../../assets/images/homePage/yoga1.svg";
import slide2 from "../../../../assets/images/homePage/yoga2.svg";
import slide3 from "../../../../assets/images/homePage/yoga3.svg";
import slide4 from "../../../../assets/images/homePage/yoga4.svg";
import slide5 from "../../../../assets/images/homePage/yoga5.svg";
import slide6 from "../../../../assets/images/homePage/yoga6.svg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6];

class Slider extends Component {
  state = {
    currentIndex: 0,
    value: 0
  };

  goNextSlideHandler = () => {
    //console.log("next", this.state.currentIndex);

    if (this.state.currentIndex === images.length - 1) {
      return this.setState({ currentIndex: 0 });
    } else {
      this.setState(prevState => {
        return { currentIndex: prevState.currentIndex + 1 };
      });
    }

    //console.log(this.state.value)
    this.clientWidthNext();
  };

  goPrevSlideHandler = () => {
    //console.log("prev", this.state.currentIndex);

    if (this.state.currentIndex === 0) {
      return this.setState({ currentIndex: images.length - 1 });
    } else {
      this.setState(prevState => {
        return { currentIndex: prevState.currentIndex - 1 };
      });
    }
    //console.log(this.state.value)

    this.clientWidthPrev();
  };

  clientWidthNext = () => {
    this.setState(prevState => {
      return { value: prevState.value + 700 };
    });
  };

  clientWidthPrev = () => {
    this.setState(prevState => {
      return { value: prevState.value - 700 };
    });
  };

  render() {
    return (
      <div className={classes.Slider}>
        <div
          style={{
            transform: "translateX(${this.state.value}px)",
            transition: "transform ease-out 0.45s"
          }}
        >
          {images.map((img, index) => (
            <Slide key={index} img={img} />
          ))}
        </div>
        <LeftArrow clicked={this.goPrevSlideHandler} />
        <RightArrow clicked={this.goNextSlideHandler} />
      </div>
    );
  }
}

export default Slider;

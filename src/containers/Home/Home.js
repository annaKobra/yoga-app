import React, { Component } from "react";

import Slider from "../../components/Pages/HomePage/Slider/Slider";
import PopupMessege from "../../components/Pages/HomePage/PopupMessege/PopupMessege";

class Home extends Component {
  state = {
    showMessege: true
  };

  closeMessegeHandler = () => {
    this.setState({ showMessege: false });
  };

  render() {
    const { showMessege } = this.state;
    return (
      <>
        <Slider />
        <PopupMessege
          closeMessage={this.closeMessegeHandler}
          show={showMessege}
        />
      </>
    );
  }
}

export default Home;

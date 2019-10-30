import React, { Component } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Footer from "../Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <>
        <Toolbar />
        {/*<div>Side drawer</div>*/}
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;

import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";

const toolbar = props => (
  <>
    {/*<div>MENU->for mobile</div>*/}
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </>
);

export default toolbar;

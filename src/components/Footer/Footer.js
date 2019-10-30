import React from "react";

import classes from "./Footer.module.css";

import facebookLogo from "../../assets/images/footerPage/facebook-square-brands.svg";
import instagramLogo from "../../assets/images/footerPage/instagram-brands.svg";
import questionLogo from "../../assets/images/footerPage/question-circle-solid.svg";
import envelopeLogo from "../../assets/images/footerPage/envelope-open-text-solid.svg";
import copyrightLogo from "../../assets/images/footerPage/copyright-regular.svg";

import Question from "./Question/Question";

import { Route, Link } from "react-router-dom";

const footer = props => {
  return (
    <>
      <Route path="/question" component={Question} />
      <div className={classes.Footer}>
        <img src={facebookLogo} alt="facebook-logo" />
        <img src={instagramLogo} alt="instagram-logo" />
        <Link to="/question">
          <img src={questionLogo} alt="question-logo" />
        </Link>
        <Link to="/contact">
          <img src={envelopeLogo} alt="envelope-logo" />
        </Link>
      </div>
      <div className={classes.CopyRights}>
        <img src={copyrightLogo} width="20px" alt="copyright-logo" />
        <p>2019 AnnaKobra</p>
      </div>
    </>
  );
};

export default footer;

import React from "react";

import classes from "./PopupMessege.module.css";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import Logo from "../../../Logo/Logo";

const popupMessege = props => (
  <Modal show={props.show}>
    <div className={classes.PopupMessege}>
      <div className={classes.Top}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.Button}>
          <Button clicked={props.closeMessage}>
            <i class="fas fa-times"></i>
          </Button>
        </div>
      </div>

      <p>
        The body benefits from movement, and the mind benefits from stillness
      </p>
      <p>Sakyong Mipham</p>
    </div>
  </Modal>
);

export default popupMessege;

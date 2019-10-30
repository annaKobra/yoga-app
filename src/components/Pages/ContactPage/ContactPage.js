import React from "react";

import classes from "./ContactPage.module.css";
import Button from "../../UI/Button/Button";

const contactPage = props => {
  const dataOfContact = Object.keys(props.contactData).map(data => {
    return [...Array(props.contactData[data])].map((_, i) => {
      return (
        <div key={data + i}>
          <p>{props.contactData[data].street}</p>
          <p>
            {props.contactData[data].city} {props.contactData[data].postalCode}{" "}
            {props.contactData[data].state}
          </p>
          <p>{props.contactData[data].mobile}</p>
          <p>{props.contactData[data].fax}</p>
        </div>
      );
    });
  });
  return (
    <div className={classes.ContactPage}>
      <form>
        <fieldset>
          <legend style={{ textAlign: "center" }}>Get in Touch</legend>
          <label for="name">Name</label>
          <input type="text" id="name" />
          <label for="email">Email</label>
          <input type="text" id="email" />
          <label for="messege">Messege</label>
          <input type="text" id="messege" />
          <Button>SUBMIT</Button>
        </fieldset>
      </form>
      <div className={classes.Contact}>
        <h3 style={{ textAlign: "center" }}>Contact Us</h3>
        {dataOfContact}
      </div>
    </div>
  );
};
export default contactPage;

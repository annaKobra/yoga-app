import React, { Component } from "react";

import { Route } from "react-router-dom";
import ContactPage from "../../components/Pages/ContactPage/ContactPage";
import axios from "axios";

class Contact extends Component {
  state = {
    contactData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/contactUs")
      .then(response => {
        this.setState({
          contactData: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { contactData } = this.state;
    return (
      <>
        <Route
          path="/contact"
          render={props => <ContactPage {...props} contactData={contactData} />}
        />
      </>
    );
  }
}

export default Contact;

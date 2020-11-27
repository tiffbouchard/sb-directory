import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./SubmitPage.css"

import SubmitForm from "../../components/SubmitForm/SubmitForm"

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <section className="SubmitForm">
        <SubmitForm
          {...this.props}
          updateMessage={this.updateMessage}
        />
        {/* <p>{this.state.message}</p> */}
      </section>
    );
  }
}

export default SubmitPage;
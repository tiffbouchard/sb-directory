import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SignupForm from "../../components/SignupForm/SignupForm"

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <section className="SignupPage">
        <SignupForm
          {...this.props}
          updateMessage={this.updateMessage}
        />
        {/* <p>{this.state.message}</p> */}
      </section>
    );
  }
}

export default SignupPage;
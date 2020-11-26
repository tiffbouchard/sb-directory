import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm"

import "./LoginPage.css"

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  // updateMessage = (msg) => {
  //   this.setState({ message: msg });
  // };

  render() {
    return (
      <section className="LoginForm">
        <h3>Log In</h3>
        <LoginForm
          {...this.props}
          // updateMessage={this.updateMessage}
        />
        {/* <p>{this.state.message}</p> */}
      </section>
    );
  }
}

export default LoginPage;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm"

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
      <div className="LoginForm">
        <LoginForm
          {...this.props}
          // updateMessage={this.updateMessage}
        />
        {/* <p>{this.state.message}</p> */}
      </div>
    );
  }
}

export default LoginPage;
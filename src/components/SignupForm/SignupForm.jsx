import React, { Component } from 'react';
import userService from "../../utils/userService";
import { Link } from "react-router-dom";


class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    users: this.props.users,
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // if (this.validateUsername()) {
    //   console.log("hi");
    // }
    // this.validateUsername();
    // this.validateEmail();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.firstName &&
      this.state.lastName &&
      this.state.username &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
          <h5>
            Sign up
          </h5>
          <form onSubmit={this.handleSubmit}>
                <input
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <input
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <input
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <input
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordConf"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="Confirm Password"
                  value={this.state.passwordConf}
                  onChange={this.handleChange}
                />
              <button
                disabled={this.isFormInvalid()}
                type="submit"
              >
                Sign Up
              </button>
                  <Link href="/login">
                    Already have an account? Log in
                  </Link>
          </form>
        </div>
    );
  }
}

export default SignupForm;
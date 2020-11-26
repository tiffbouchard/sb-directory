import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./LoginForm.css";
import userService from "../../utils/userService";

import "./LoginForm.css"

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert("Invalid Credentials!");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Log In
          </button>
            <div>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </div>
            <div>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

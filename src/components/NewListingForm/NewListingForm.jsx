import React, { Component } from 'react';
// import listingService from "../../utils/listingService";
import { Link } from "react-router-dom";


class SignupForm extends Component {
  state = {
    businessName: "",
    image: "",
    description: "",
  };

  handleChange = (e) => {
    // this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   // if (this.validateUsername()) {
  //   //   console.log("hi");
  //   // }
  //   // this.validateUsername();
  //   // this.validateEmail();
  //   try {
  //     await listingService.signup(this.state);
  //     this.props.handleSignupOrLogin();
  //     this.props.history.push("/");
  //   } catch (err) {
  //     this.props.updateMessage(err.message);
  //   }
  // };

  isFormInvalid() {
    return !(
      this.state.businessName &&
      this.state.image &&
      this.state.description
    );
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
                <input
                  autoComplete="fname"
                  name="businessName"
                  variant="outlined"
                  required
                  fullWidth
                  id="businessName"
                  label="Business Name"
                  autoFocus
                  type="text"
                  placeholder="Business Name"
                  value={this.state.businessName}
                  onChange={this.handleChange}
                />
                <input
                  variant="outlined"
                  required
                  fullWidth
                  id="image"
                  label="Image"
                  name="image"
                  autoComplete="image"
                  type="text"
                  placeholder="Image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
                <textarea
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  type="text"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              <button
                disabled={this.isFormInvalid()}
                type="submit"
              >
                Submit
              </button>
          </form>
        </div>
    );
  }
}

export default SignupForm;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import NewListingForm from "../../components/NewListingForm/NewListingForm"

class NewListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  // updateMessage = (msg) => {
  //   this.setState({ message: msg });
  // };

  render() {
    return (
      <div className="NewListingForm">
        <NewListingForm
          {...this.props}
          // updateMessage={this.updateMessage}
        />
        {/* <p>{this.state.message}</p> */}
      </div>
    );
  }
}

export default NewListingPage;
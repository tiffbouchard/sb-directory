import React from "react";
import userService from "../utils/userService";

const UserContext = React.createContext();

class UserProvider extends React.Component {
  state = {
    user: userService.getUser(),
  };

  render() {
    return (
      <UserContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserContext };

export default UserProvider;
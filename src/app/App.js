import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import UserProvider from "../context/userContext";
import userService from "../utils/userService";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
// import DetailPage from "../../pages/DetailPage/DetailPage";
// import ProfilePage from "../../pages/ProfilePage/Profile";
// import NewPostPage from "../NewPostPage/NewPostPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // profile: profileService.getProfile(),
      // allPosts: [],
      // currentPost: [],
      // allProfiles: [],
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ profile: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };


  render() {
    return (
      <div>
        <UserProvider>
          <Header
            handleLogout={this.handleLogout}
            // user={this.state.user}
            // allListings={this.state.allListings}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage 
                // allListings={this.state.allListings} 
              />}
            />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  profiles={this.state.allProfiles}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
          <Footer />
        </UserProvider>
      </div>
    );
  }
}

export default App;

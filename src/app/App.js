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
import MePage from "../pages/MePage/MePage";
import SubmitPage from "../pages/SubmitPage/SubmitPage";
// import ReadPage from "../pages/ReadPage/ReadPage";
// import BrowsePage from "../pages/BrowsePage/BrowsePage";
// import DetailPage from "../../pages/DetailPage/DetailPage";
import NewListingPage from "../pages/NewListingPage/NewListingPage";
import ScrollingBanner from "../components/ScrollingBanner/ScrollingBanner"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      // profile: profileService.getProfile(),
      // allPosts: [],
      // currentPost: [],
      // allProfiles: [],
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };


  render() {
    return (
      <UserProvider>
        <div id="page-container">
          <ScrollingBanner/>
          <Header
            handleLogout={this.handleLogout}
            user={this.state.user}
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
            <Route
              exact
              path="/new-listing"
              render={({ history }) => (
                <NewListingPage
                  history={history}
                />
              )}
            />
             <Route
              exact
              path="/read"
              render={(props) => (
                <SubmitPage
                  {...props}
                  user={this.state.user}
                />
              )}
            />
             <Route
              exact
              path="/browse"
              render={(props) => (
                <SubmitPage
                  {...props}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/contribute"
              render={(props) => (
                <SubmitPage
                  {...props}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/:username"
              render={(props) => (
                <MePage
                  {...props}
                  user={this.state.user}
                />
              )}
            />
          </Switch>
          <Footer />
        </div>
        </UserProvider>
    );
  }
}

export default App;

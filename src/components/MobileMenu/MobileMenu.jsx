import React from 'react';
import { Link } from "react-router-dom";
// import { UserContext } from "../../context/userContext"

import "./MobileMenu.css"

export default function Header(props) {  
  let userInfo = props.user ? (
    <>
    <Link to={`/${props.user.username}`}>me</Link>
    <Link className="logout btn" onClick={() => {
      props.handleLogout();
    }}>log out</Link>
  </>
  ) : (
    <>
    <Link to="/login" className="login btn">log in</Link>
    <Link to="/signup" className="signup btn">sign up</Link>
  </>
  );

  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
  <Link to="/">indy</Link>
        </div>
        <div className="navlinks">
          <Link to="browse">browse</Link>
          <Link to="read">read</Link>
          <Link to="/contribute">contribute</Link>
          {/* <Link to="/new-listing">add listing</Link> */}
          {userInfo}
        </div>
      </header>
    </div>
  )
}
{/* <Link to="/category/fashion">Fashion</Link>
<Link to="/category/lifestyle">Lifestyle</Link>
<Link to="/category/health-wellness">Health & Wellness</Link>
<Link to="/category/accessories">Accessories</Link>
<Link to="/category/home">Home</Link> */}
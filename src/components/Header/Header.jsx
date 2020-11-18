import React from 'react';
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <Link to="/">SMOL</Link>
      <Link to="/category/fashion">Fashion</Link>
      <Link to="/category/lifestyle">Lifestyle</Link>
      <Link to="/category/health-wellness">Health & Wellness</Link>
      <Link to="/category/accessories">Accessories</Link>
      <Link to="/category/home">Home</Link>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/logout">Log out</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}
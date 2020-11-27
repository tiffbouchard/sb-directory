import React from 'react';
import { Link } from "react-router-dom";

import "./ScrollingBanner.css"

export default function ScrollingBanner(props) {  
  return (
    <div className="banner-container">
      <p>welcome to indy - browse through hundreds of independent brands and small businesses from all over the world - contribute to our growing repository <Link to="/submit">here</Link></p>
    </div>
  )
}

import React from 'react';
import { Link } from "react-router-dom";

import "./Articles.css"

export default function Articles(props) {
  return (
    <section className="articles-container">
      <div className="articles">
        <div className="article">
          <Link to="/lol">
            <img src="https://cdn.repeller.com/wp-content/uploads/2020/10/instahome_header.jpg"/>
          </Link>
          <div className="headline">
            <h3>how to start your small business</h3>
          </div>
        </div>
        <div className="article">
          <Link to="/lol">
            <img src="https://cdn.repeller.com/wp-content/uploads/2020/10/khaite-square-top-1200x900.png"/>
          </Link>
        </div>
        <div className="article">
          <Link>
          <img src="https://cdn.repeller.com/wp-content/uploads/2020/10/20-10-15-LightJacket1-1200x796.jpg"/>
          </Link>
        </div>
      </div>
    </section>
  )
}
import React from 'react';
import { Link } from "react-router-dom";

import "./Articles.css"

export default function Articles(props) {
  return (
    <section className="articles-container">
      <div className="articles">
        <div className="article">
          <div className="image" id="image-1">
            <Link to="/lol">
              <img src="https://cdn.repeller.com/wp-content/uploads/2020/10/instahome_header.jpg"/>
            </Link>
          </div>
          <div className="headline">
            <h3>how to start your small business</h3>
            <p>by: tiffany bouchard</p>
          </div>
        </div>
        <div className="article">
          <div className="image" id="image-2">
            <Link to="/lol">
              <img src="https://cdn.repeller.com/wp-content/uploads/2020/10/khaite-square-top-1200x900.png"/>
            </Link>
          </div>
          <div className="headline">
            <h3>whats indy?</h3>
            <p>by: tiffany bouchard</p>
          </div>
        </div>
        <div className="article">
          <div className="image" id="image-3">
            <Link>
            <img src="https://cdn.repeller.com/wp-content/uploads/2020/10/20-10-15-LightJacket1-1200x796.jpg"/>
            </Link>
          </div>
          <div className="headline">
            <h3>interviews: with @kaileemckenzine</h3>
            <p>by: tiffany bouchard</p>
          </div>
        </div>
      </div>
    </section>
  )
}
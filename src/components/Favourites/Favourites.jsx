import React from 'react';
import { Link } from "react-router-dom";

import "./Favourites.css"

export default function Favourites(props) {
  return (
    <section className="favourites-container">
      <div className="favourites">
        <h2>our favourites</h2>
        <nav>
          <ul>
            <li>fashion</li>
            <li>home</li>
            <li>beauty</li>
            <li>wellness</li>
          </ul>
        </nav>
        <div className="image-boxes">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
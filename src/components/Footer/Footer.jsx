import React from 'react';
import { Link } from "react-router-dom";

import "./Footer.css"

export default function Footer(props) {
  return (
    <footer>
      <div>
        <div>
          <h3>Fashion</h3>
          <ul>
            <li>Clothing</li>
            <li>Clothing</li>
          </ul>
        </div>
        <div>
          <h3>Home</h3>
          <ul>
            <li>Bedding</li>
            <li>Kitchenware</li>
          </ul>
        </div>
        <div>
          <h3>Beauty</h3>
          <ul>
            <li>Clothing</li>
            <li>Clothing</li>
          </ul>
        </div>
        <div>
          <h3>Health & Wellness</h3>
          <ul>
            <li>Clothing</li>
            <li>Clothing</li>
          </ul>
        </div>
      </div>
      <p>Copyright 2020</p>
    </footer>
  )
}
import React from 'react';
import { Link } from "react-router-dom";

import "./Favourites.css"

export default function Favourites(props) {
  return (
    <section className="favourites-container">
      <div className="favourites">
      <h2>{props.whosfaves}&nbsp;favourites</h2>
        <nav>
          <ul>
            <li>fashion</li>
            <li>home</li>
            <li>beauty</li>
            <li>wellness</li>
          </ul>
        </nav>
        <div className="slider">
          <div className="image-boxes slide-track">
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">outdoor voices</div>
            </div>
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">fresh cut flowers</div>
            </div>
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">house of sunny</div>
            </div>
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">cocokind</div>
            </div>
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">lisa says gah</div>
            </div>
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">everlane</div>
            </div>
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">golde</div>
            </div>
            <div className="box">
              <Link to="/">
                <img src="https://cdn.shopify.com/s/files/1/0603/2741/articles/cocokind-skincare_1024x1024.png?v=1557985165"/>
              </Link>
              <div className="descriptor">ilia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
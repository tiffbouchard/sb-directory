import React from 'react';
import { Link } from "react-router-dom";

import Favourites from "../../components/Favourites/Favourites"

import "./MePage.css"

export default function MePage(props) {
  const [savedListings, setListings] = React.useState();
  const username = props.match.params.username;

  React.useEffect(() => {
    const username = props.match.params.username;
    fetch(`/api/profile/${username}`)
      .then((res) => res.json())
      .then((savedListings) => setListings(savedListings), console.log(savedListings))
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
  <section className="mepage-container">
    <div className="mepage">
      <div className="lists">
        <div>
         <Favourites whosfaves={`${props.user.firstName}'s`}/>
        </div>
        {/* <div>
          <h3>saved</h3>
        </div> */}
      </div>
      <div className="sidebar">
        <h3>{props.user.firstName}&nbsp;{props.user.lastName}</h3>
        <p>@{props.user.username}</p>
        <p>joined {new Date(props.user.createdAt).toDateString()}</p>
      </div>
    </div>
  </section>
  )
}
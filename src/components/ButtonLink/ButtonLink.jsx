import React from 'react';
import { Link } from "react-router-dom";


import "./ButtonLink.css"

export default function ButtonLink(props) {
  return (
  <Link className="btn" to={props.link}>{props.label}</Link>
  )
}

// import React from 'react';

// import "./Button.css"

// export default function Button(props) {
//   return (
//   <button className="btn" onClick={props.handleClick}>{props.label}</button>
//   )
// }
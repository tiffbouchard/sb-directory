import React from 'react';
import { Link } from "react-router-dom";

import Articles from "../../components/Articles/Articles"
import Favourites from "../../components/Favourites/Favourites"

export default function Footer(props) {
  return (
  <section>
    <Articles/>
    <Favourites/>
  </section>
  )
}
import React from 'react';
import { Link } from "react-router-dom";
// import { UserContext } from "../../context/userContext"

import *  as constants from "./constants"

import "./SubmitForm.css"

export default function SubmitForm(props) {  
  const countries = constants.COUNTRIES;
  const categories = constants.CATEGORIES;
  const subcategories = constants.SUBCATEGORIES;

  const countryEl= countries.map((country) => {
      return <option value={country}>{country}</option>
  });

  // const categoryEl = for (category in categories) {
  //   return (
  //     <option value={category}>{category}</option>
  //   )};

  // const categoryEl = for (category in categories) {
  //   return (
  //     <option value={category}>{category}</option>
  //   )};

  return (
    <div className="submit-form-container">
      <h3>contribute</h3>
      <form>
        <input type="text" placeholder="business name" required/>

        <div>
          <input type="url" placeholder="photo link"/>
          <small>choose an image that represents the business/brand, if none is provided a default image will appear</small>
        </div>

        <div>
          <input type="url" placeholder="website" required/>
          <small>if no official website, enter any platform (instagram, facebook etc.)</small>
        </div>

        <input type="text" placeholder="instagram username"/>

        <div>
          <label for="business-owner">is this your business?</label>
          <input type="checkbox" name="business-owner"/>
        </div>

        <div>
          <label for="countries">country</label>
          <input list="countries" placeholder="Start typing..."/>
          <datalist id="countries">
            {countryEl}
          </datalist>
        </div>

        <div>
          <label for="category">category</label>
          <select name="category" id="category">
            <option value="fashion">fashion</option>
            <option value="home">home</option>
            <option value="beauty">beauty</option>
            <option value="health-wellness">health & wellness</option>
          </select>
        </div>

        <div>
          <p>highlights</p>
          <div>
            <input type="checkbox" id="bipoc" name="highlight" value="bipoc"/>
            <label for="bipoc">bipoc owned</label>
          </div>
          <div>
            <input type="checkbox" id="women" name="highlight" value="woman"/>
            <label for="women">women owned</label>
          </div>
          <div>
            <input type="checkbox" id="sustainable" name="highlight" value="sustainable"/>
            <label for="sustainable">sustainable</label>
          </div>
          <div>
            <input type="checkbox" id="ethical" name="highlight" value="ethical"/>
            <label for="ethical">ethical</label>
          </div>
          <div>
            <input type="checkbox" id="eco-friendly" name="highlight" value="eco-friendly"/>
            <label for="eco-friendly">eco-friendly</label>
          </div>
          <div>
            <input type="checkbox" id="vegan" name="highlight" value="vegan"/>
            <label for="vegan">vegan</label>
          </div>
        </div>

        <textarea placeholder="additional info"/>

        <textarea placeholder="feedback - anything we are missing?"/>

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

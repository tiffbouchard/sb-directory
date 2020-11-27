import React from 'react';
import { Link } from "react-router-dom";
// import { UserContext } from "../../context/userContext"

import "./SubmitForm.css"

export default function SubmitForm(props) {  
  return (
    <div className="submit-form-container">
      <h3>contribute</h3>
      <form>
          <input type="text" placeholder="business name"/>
          <textarea placeholder="description"/>
          <button type="submit">submit</button>
      </form>
    </div>
  )
}

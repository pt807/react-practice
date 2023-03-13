import React from "react";
import "./assets/css/Emaillist.css";

const Email = ({ no, firstName, lastName, email }) => {
  return (
    <li>
      {firstName}
      {lastName}
      <br />
      {email}
      <a href=""/>
    </li>
  );
};

export default Email;

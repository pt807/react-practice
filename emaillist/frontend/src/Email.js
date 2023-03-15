import React from "react";
import "./assets/css/Emaillist.css";

const Email = ({ no, firstName, lastName, email, callbackdeleteEmail }) => {
  return (
    <li>
      {firstName}
      {lastName}
      <br />
      {email}
      <a href="#" onClick={() => callbackdeleteEmail(no)} />
    </li>
  );
};

export default Email;

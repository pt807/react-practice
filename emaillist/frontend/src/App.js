import React, { useState } from "react";
import "./assets/css/App.css";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";
import data from "./assets/json/data.json";

const App = () => {
  const [emails, setEmails] = useState(data);
  const notifyKeyWordChange = function (keyword) {
    // keyword가 firstName or lastName or email
    const newEmails = emails.filter((e) => {
      return true;
    });
  };
  return (
    <div id="App" className={"App"}>
      <RegisterForm />
      <Searchbar />
      <Emaillist emails={emails} />
    </div>
  );
};

export default App;

import React from "react";
import "./assets/css/App.css";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";
import Emails from "./assets/json/data.json";

const App = () => {
  return (
    <div id="App" className={"App"}>
      <RegisterForm />
      <Searchbar />
      <Emaillist Emails={Emails}/>
    </div>
  );
};

export default App;

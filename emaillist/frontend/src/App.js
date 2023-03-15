import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import RegisterForm from "./RegisterForm";
import Searchbar from "./Searchbar";
import Emaillist from "./Emaillist";

const App = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await fetch("/api/email", {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const notifyKeyWordChange = async (keyword) => {
    // keyword가 firstName or lastName or email
    // const newEmails = data.filter((e) => {
    //   return (
    //     e.firstName.indexOf(keyword) !== -1 ||
    //     e.lastName.indexOf(keyword) !== -1 ||
    //     e.email.indexOf(keyword) !== -1
    //   );
    // });
    // setEmails(newEmails);

    try {
      const response = await fetch(`/api/email?keyword=${keyword}`, {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addMail = async (firstName, lastName, email) => {
    const newTask = {
      no: null,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    try {
      const response = await fetch("/api/email", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails([json.data, ...emails]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteEmails = async (no) => {
    try {
      const response = await fetch(`/api/email/${no}`, {
        method: "delete",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(emails.filter((email) => email.no !== no));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div id="App" className={"App"}>
      <RegisterForm callbackaddEmail={addMail} />
      <Searchbar callback={notifyKeyWordChange} />
      <Emaillist emails={emails} callbackdeleteEmail={deleteEmails} />
    </div>
  );
};

export default App;

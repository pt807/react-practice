import React from "react";
import styles from "./assets/css/Emaillist.css";
import Email from "./Email";

const Emaillist = ({ Emails }) => {
  console.log(Emails);
  return (
    <ul className={styles.Emaillist}>
      {Emails.map((email) => (
        <Email
          key={email.no}
          no={email.no}
          firstName={email.firstName}
          lastName={email.lastName}
          email={email.email}
        />
      ))}
    </ul>
  );
};

export default Emaillist;

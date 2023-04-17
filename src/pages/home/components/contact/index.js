import React, { useState } from 'react';
import db from '../../../../util/firebase';
import './index.scss';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [active, setActive] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const sendEmailToFirebase = (event) => {
    event.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      alert("Invalid Email. Please check");
      return
    }
    setActive(false);
    db.collection("email_signups").add({
      email: email
    })
    .then((docRef) => {
      alert("Successfully signed up " + email);
      setActive(true);
      setEmail('');
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Sign Up failed. Please try again.");
      setActive(true);
    });
  }

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">
        Contact
      </h2>
      <form onSubmit={sendEmailToFirebase} class="demo-signup-form">
        <input type="text"
          disabled={!active}
          className={"contact-email " + (active ? "activeSubmit" : "inactiveSubmit")}
          value={email}
          onChange={handleEmailChange}
          placeholder="your email address" required />
        <input
          disabled={!active}
          type="submit" value={active ? "Sign Up" : "Please Wait"}
          className={"submitInput " + (active ? "activeSubmit" : "inactiveSubmit")} />
      </form>

      <div className="content-content">
        Reach us at <a href="mailto:support@codr.one">support@codr.one</a> for all other queries.
      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from "react";
import "./ContactMe.css";
import contactus from "../../assets/Home/contactus.jpeg";
import { send } from "emailjs-com";

function ContactMe() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    const { from_name, email, message } = e.target.elements;
    e.preventDefault();
    send(
      "service_i91vtgb",
      "template_lz8tuqy",
      {
        to_name: "Kanishka",
        from_name: from_name.value,
        email: email.value,
        message: message.value,
      },

      "user_aMN8qgo90VYXJjhzaN7EU"
    )
      .then((response) => {
        console.log("success", response.text);
      })
      .catch((err) => {
        console.log("error", console.error.text);
      });
    setTimeout(() => {
      setMessage(false);
    }, 2000);
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contactus} alt="" />
      </div>
      <div className="right">
        <h1 style={{ paddingBottom: "20px" }}>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="contactButton">
            Send
          </button>
          {message && (
            <span className="thanks">Thankyou for your Interest!!</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactMe;

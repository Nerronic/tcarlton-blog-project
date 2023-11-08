import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../App.css";


function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <p>
          We'd love to hear from you! Whether you have a question about one of
          our upcoming videos, would like to collaborate with us on a future
          project, or simply want to say hello, we're here to listen.
        </p>
        <p>Let's make it happen together!</p>
      </div>
      <div className="social-icons">
        <FaTwitter />
        <FaFacebook />
        <FaInstagram />
      </div>
    </div>
  );
}

export default Contact;
import React from "react";
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Need To Get In Touch?</h1>
      <h1 className="primary-heading">You Can Contact Us On</h1>
      <div className="contact-form-container">
        <MdEmail className="contact-icon"></MdEmail>
        <span>pickupstix@gmail.com</span><br/>
        <IoIosContact className="contact-icon" />
        <span>7666772555</span> <br />
        <IoIosContact className="contact-icon" />
        <span>9421213756</span>
      </div>
    </div>
  );
};

export default Contact;

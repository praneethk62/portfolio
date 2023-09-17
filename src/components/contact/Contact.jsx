import React from "react";
import './Contact.css'
import Linkedin from '../../assets/Linkedin.webp'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.avif'


const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppertunities.
        </span>
        <form className="contactForm" action="">
          <input type="text" className="name" placeholder="yourname" />
          <input type="email" className="email" placeholder="your email" />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="your message"
          ></textarea>
          <button type="submit" value="sent" className="submitbtn">
            submit
          </button>
          <div className="links">
            <img src={Linkedin} alt="Linkedin" className="link" />
            <img src={Github} alt="Github" className="link" />
            <img src={Instagram} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

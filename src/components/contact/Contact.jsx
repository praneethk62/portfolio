import React, { useRef } from "react";
import './Contact.css'
import Linkedin from '../../assets/Linkedin.webp'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.avif'
import emailjs from "@emailjs/browser";
// import react from '../../assets/react.png'
// import html from '../../assets/html.png'
// import css from '../../assets/css.png'
// import js from '../../assets/js.png'
// import node from '../../assets/node.png'
// import bootstrap from '../../assets/Bootstrap_logo.svg.png'
// import git from '../../assets/github.png'
// import mongodb from '../../assets/mongodb-.webp'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6lszo1l",
        "template_7oq3bmv",
        form.current,
        "-ORwWayghjKJJvWjy"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
          alert('email sent !')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      {/* <div id="techskills">
        <h1 className="contactPageTitle">Skills</h1>
        <div className="techImgs">
          <img src={react} alt="react" className="techImg" />
          <img src={html} alt="html" className="techImg" />
          <img src={css} alt="css" className="techImg" />
          <img src={js} alt="js" className="techImg" />
        </div>
        <div className="techImgss">
          <img src={node} alt="node" className="techImg" />
          <img src={git} alt="git" className="techImg" />
          <img src={bootstrap} alt="bootstrap" className="techImg" />
          <img src={mongodb} alt="mongodb" className="techImg" />
        </div>
      </div> */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppertunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="yourname"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="your email"
            name="from_email"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="your message"
          ></textarea>
          <button type="submit" value="send" className="submitbtn">
            submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/praneethkmern/">
              <img src={Linkedin} alt="Linkedin" className="link" />
            </a>
            <a href="https://github.com/praneethk62">
              <img src={Github} alt="Github" className="link" />
            </a>
            <img src={Instagram} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

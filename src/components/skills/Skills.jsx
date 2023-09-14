import React from 'react'
import './skills.css'
import WebDesign from '../../assets/design.jpg'
import WebDevelop from '../../assets/backend.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skilldescription">
        I'm a MERN Developer, conjuring web enchantments with React.js and
        Node.js. MongoDB is my crystal ball for crafting data-driven marvels.
        Let's bring your digital dreams to life!
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              I specialize in creating stunning and interactive web designs
              using the power of React.js to deliver engaging user experiences.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={WebDevelop} alt="WebDevelop" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              I'm passionate about web development, specializing in Node.js and
              Express to craft powerful and scalable back-end solutions for the
              modern web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
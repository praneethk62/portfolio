import React from 'react'
import './intro.css'
import bg from '../../assets/image.png' 
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontant">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Praneeth k</span> <br />
          Full-stack Developer
        </span>
        <p className="intropara">
          I am a full-stack developer who crafts innovative digital solutions by <br /> seamlessly combining frontend and backend technologies to deliver <br /> exceptional user experiences
        </p>
        <Link>
          <button className="btn">
            {" "}
            <img src={btnImg} alt="Hire me" className='btnImg' />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default Intro
import React from 'react'
import './work.css'
import protfolio1  from '../../assets/blogging.png'
import protfolio2 from '../../assets/personalweb.png'


const Work = () => {
  return (
    <section id="works">
      <h2 className="WorksTitle"> Portfolio</h2>
      <span className="worksdesc">
        Welcome to my portfolio, where I proudly showcase my works. These
        projects represent my dedication to crafting innovative solutions and
        pushing the boundaries of web development. Feel free to explore and get
        inspired.
      </span>
      <div className="workimgs">
        <a href="https://github.com/praneethk62/project">
          <img src={protfolio1} alt="protfolio" className="worksimg" />
        </a>
        <a href="https://github.com/praneethk62/portfolio">
          <img src={protfolio2} alt="protfolio" className="worksimg" />
        </a>
      </div>
    </section>
  );
}

export default Work;
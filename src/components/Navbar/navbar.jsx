import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Contactimg from "../../assets/contact.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="header">praneeth k</div>
      <div className="desktopmenu">
        <Link className="desktopmenulistitem">Home</Link>
        <Link className="desktopmenulistitem">About</Link>
        <Link className="desktopmenulistitem">Portfolio</Link>
        <Link className="desktopmenulistitem"></Link>
      </div>

      <button className="desktopmenubtn">
        <img src={Contactimg} alt="" className="desktopimg" /> contact me
      </button>
    </nav>
  );
};

export default Navbar;
